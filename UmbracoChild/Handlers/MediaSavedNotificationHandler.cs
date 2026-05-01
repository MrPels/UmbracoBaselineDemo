using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;

namespace UmbracoChild.Handlers
{
    public class MediaSavedNotificationHandler : INotificationAsyncHandler<MediaSavedNotification>
    {
        private static readonly string[] ConvertibleExtensions = [".jpg", ".jpeg", ".png"];

        private readonly IMediaService _mediaService;
        private readonly MediaFileManager _mediaFileManager;
        private readonly IBackgroundTaskQueue _taskQueue;
        private readonly IServiceScopeFactory _scopeFactory;

        public MediaSavedNotificationHandler(
            IMediaService mediaService,
            MediaFileManager mediaFileManager,
            IBackgroundTaskQueue taskQueue,
            IServiceScopeFactory scopeFactory)
        {
            _mediaService = mediaService;
            _mediaFileManager = mediaFileManager;
            _taskQueue = taskQueue;
            _scopeFactory = scopeFactory;
        }

        public async Task HandleAsync(MediaSavedNotification notification, CancellationToken cancellationToken)
        {
            foreach (var mediaItem in notification.SavedEntities)
            {
                if (!mediaItem.ContentType.Alias.Equals("Image", StringComparison.OrdinalIgnoreCase))
                    continue;

                var umbracoFilePath = mediaItem.GetValue<string>("umbracoFile");
                if (string.IsNullOrEmpty(umbracoFilePath))
                    continue;

                // The value may be a JSON string from the image cropper; extract the src path.
                var filePath = ExtractFilePath(umbracoFilePath);
                var extension = Path.GetExtension(filePath);

                // Convert to WebP if applicable
                if (ConvertibleExtensions.Contains(extension, StringComparer.OrdinalIgnoreCase))
                {
                    using var sourceStream = _mediaFileManager.FileSystem.OpenFile(filePath);
                    using var image = await Image.LoadAsync(sourceStream, cancellationToken);

                    using var webpStream = new MemoryStream();
                    await image.SaveAsync(webpStream, new WebpEncoder(), cancellationToken);
                    webpStream.Position = 0;

                    var webpPath = Path.ChangeExtension(filePath, ".webp");
                    _mediaFileManager.FileSystem.AddFile(webpPath, webpStream, true);

                    // Update the media item to point to the new webp file
                    mediaItem.SetValue("umbracoFile", webpPath);
                    mediaItem.SetValue("umbracoExtension", "webp");

                    var currentName = mediaItem.GetValue<string>("umbracoFileName");
                    if (!string.IsNullOrEmpty(currentName))
                    {
                        mediaItem.SetValue("umbracoFileName", Path.ChangeExtension(currentName, ".webp"));
                    }

                    // Update the media item display name if it still has the old extension
                    if (mediaItem.Name != null && ConvertibleExtensions.Any(ext =>
                        mediaItem.Name.EndsWith(ext, StringComparison.OrdinalIgnoreCase)))
                    {
                        mediaItem.Name = Path.ChangeExtension(mediaItem.Name, ".webp");
                    }

                    _mediaService.Save(mediaItem);
                }

                // Queue AI alt text generation as a background task
                var mediaId = mediaItem.Id;
                _taskQueue.QueueBackgroundWorkItemAsync(async token =>
                {
                    using var scope = _scopeFactory.CreateScope();
                    var mediaService = scope.ServiceProvider.GetRequiredService<IMediaService>();
                    var mediaFileManager = scope.ServiceProvider.GetRequiredService<MediaFileManager>();
                    var mediaAiService = scope.ServiceProvider.GetRequiredService<MediaAiService>();

                    try
                    {
                        var media = mediaService.GetById(mediaId);
                        if (media is null)
                            return;

                        var currentPath = ExtractFilePath(media.GetValue<string>("umbracoFile") ?? string.Empty);
                        if (string.IsNullOrEmpty(currentPath))
                            return;

                        using var stream = mediaFileManager.FileSystem.OpenFile(currentPath);
                        using var ms = new MemoryStream();
                        await stream.CopyToAsync(ms, token);
                        var imageBytes = ms.ToArray();

                        var ext = Path.GetExtension(currentPath).ToLowerInvariant();
                        var mimeType = ext switch
                        {
                            ".webp" => "image/webp",
                            ".png" => "image/png",
                            ".jpg" or ".jpeg" => "image/jpeg",
                            _ => "application/octet-stream"
                        };

                        var altText = await mediaAiService.GenerateAltTextAsync(imageBytes, mimeType, media.Name);
                        if (!string.IsNullOrWhiteSpace(altText))
                        {
                            media.SetValue("altText", altText);
                            mediaService.Save(media);
                        }
                    }
                    catch (Exception ex)
                    {
                        var logger = scope.ServiceProvider.GetRequiredService<ILogger<MediaSavedNotificationHandler>>();
                        logger.LogError(ex, "Failed to generate AI alt text for media {MediaId}", mediaId);
                    }
                });
            }
        }

        private static string ExtractFilePath(string umbracoFileValue)
        {
            if (string.IsNullOrEmpty(umbracoFileValue))
                return umbracoFileValue;

            if (umbracoFileValue.StartsWith('{'))
            {
                var json = System.Text.Json.JsonDocument.Parse(umbracoFileValue);
                return json.RootElement.GetProperty("src").GetString() ?? umbracoFileValue;
            }

            return umbracoFileValue;
        }
    }
}
