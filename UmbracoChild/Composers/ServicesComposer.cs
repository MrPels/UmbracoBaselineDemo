using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Notifications;

public class ServicesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        // 1. Køen skal være Singleton, så alle dele af appen ser den samme kø
        builder.Services.AddSingleton<IBackgroundTaskQueue>(new BackgroundTaskQueue(100));

        // 2. Registrér arbejderen, der lytter på køen
        builder.Services.AddHostedService<QueueHostedService>();

        // 3. Registrer din service
        builder.Services.AddScoped<SeoService>();
        builder.Services.AddScoped<PlaywrightCrawlerService>();

        // Registrer din handler
        builder.AddNotificationHandler<ContentPublishedNotification, SeoPublishHandler>();
        
        // Husk også din Media handler til alt-tekster her!
        // TODO
    }
}