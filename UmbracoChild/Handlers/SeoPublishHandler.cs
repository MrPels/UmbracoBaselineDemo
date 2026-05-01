using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Routing;

public class SeoPublishHandler : INotificationHandler<ContentPublishedNotification>
{
    private readonly IBackgroundTaskQueue _taskQueue;
    private readonly IPublishedUrlProvider _publishedUrlProvider;
    private readonly IServiceScopeFactory _scopeFactory;

    public SeoPublishHandler(
        IBackgroundTaskQueue taskQueue, 
        IPublishedUrlProvider publishedUrlProvider,
        IServiceScopeFactory scopeFactory)
    {
        _taskQueue = taskQueue;
        _publishedUrlProvider = publishedUrlProvider;
        _scopeFactory = scopeFactory;
    }

    public void Handle(ContentPublishedNotification notification)
    {
        foreach (var node in notification.PublishedEntities)
        {
            // Vi henter den absolutte URL (f.eks. /om-os/)
            // Mode.Absolute sikrer at vi får domænet med, hvis det er sat op
            var relativeUrl = _publishedUrlProvider.GetUrl(node.Id);
            
            // Til din lokale demo på Mac:
            var fullUrl = "https://localhost:44301" + relativeUrl; 

            _taskQueue.QueueBackgroundWorkItemAsync(async token =>
            {
                // 1. Skab et manuelt scope, så vi kan få adgang til vores services i baggrunden
                using var scope = _scopeFactory.CreateScope();
                
                // 2. Hent din SeoService ud fra scopet
                var seoService = scope.ServiceProvider.GetRequiredService<SeoService>();
                
                // 3. Kør selve automatiseringen
                try 
                {
                    await seoService.RunSeoAutomationAsync(node.Id, fullUrl);
                }
                catch (Exception ex)
                {
                    // Det er vigtigt med en try-catch her, så baggrundskøen ikke dør ved fejl
                    // Du kan logge fejlen her via en ILogger hvis du har en
                }
            });
        }
    }
}