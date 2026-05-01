using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats.Webp;

namespace UmbracoChild.Handlers
{
    public class MediaSavedNotificationHandler : INotificationHandler<MediaSavedNotification>
    {
        private readonly IMediaService _mediaService;

        public void Handle(MediaSavedNotification notification)
        {
            //TODO implement con


            throw new NotImplementedException();
        }
    }
}
