using System.Text.Json;
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models.ContentPublishing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Services.OperationStatus;

// Modellen for AI'ens svar
public class SeoResponse
{
    public string MetaTitle { get; set; } = string.Empty;
    public string MetaDescription { get; set; } = string.Empty;
    public object? JsonLd { get; set; }
}

public class SeoService
{
    private readonly PlaywrightCrawlerService _crawlerService; // Din custom service
    private readonly Kernel _kernel; // Vi gemmer hele motoren
    private readonly IChatCompletionService _chatService; // Vi henter chat-delen specifikt
    private readonly IContentService _contentService;          // Fra Umbraco
    private readonly IContentPublishingService _contentPublishingService; // Til publish i Umbraco 17
    private readonly ILogger<SeoService> _logger;              // Til fejlfinding på Mac

    private const string SeoSystemPrompt = @"
        Du er en senior SEO-specialist. Din opgave er at analysere renderet HTML-indhold og returnere optimeret metadata.
        Du skal returnere et JSON-objekt med følgende felter:
        - 'metaTitle': En optimeret sidetitel på dansk (maks 60 tegn). Skal være præcis, unik og indeholde det vigtigste søgeord.
        - 'metaDescription': En fængende beskrivelse på dansk (maks 155 tegn).
        - 'jsonLd': Et komplet og validt Schema.org objekt (JSON-LD) baseret på sidens type (f.eks. Article, Product eller FAQ).
        Regler: Svar KUN med JSON. Brug et professionelt dansk sprog.";

    public SeoService(
        PlaywrightCrawlerService crawlerService,
        Kernel kernel,
        IContentService contentService,
        IContentPublishingService contentPublishingService,
        ILogger<SeoService> logger)
    {
        _crawlerService = crawlerService;
        _kernel = kernel;
        _chatService = kernel.GetRequiredService<IChatCompletionService>("SeoTextService");
        _contentService = contentService;
        _contentPublishingService = contentPublishingService;
        _logger = logger;
    }

    public async Task RunSeoAutomationAsync(int contentId, string url)
    {   
        try
        {
            _logger.LogInformation("🚀 Starter SEO-analyse for node {Id} på {Url}", contentId, url);

            // 1. Crawl siden (Playwright kører Chromium på din Mac)
            var rawText = await _crawlerService.GetCleanContentAsync(url);
            if (string.IsNullOrWhiteSpace(rawText))
            {
                _logger.LogWarning("⚠️ Kunne ikke hente indhold fra siden.");
                return;
            }

            // 2. AI Analyse via Semantic Kernel
            var history = new ChatHistory();
            history.AddSystemMessage(SeoSystemPrompt);
            history.AddUserMessage($"Her er sidens indhold: {rawText}");

            var result = await _chatService.GetChatMessageContentAsync(history);
            var seoData = JsonSerializer.Deserialize<SeoResponse>(result.ToString(), new JsonSerializerOptions 
            { 
                PropertyNameCaseInsensitive = true 
            });

            if (seoData == null) return;

            // 3. Gem resultatet i Umbraco
            var content = _contentService.GetById(contentId);
            if (content != null)
            {
                // Tjek om redaktøren har låst feltet (valgfrit)
                bool isLocked = content.GetValue<bool>("lockAiUpdates");
                
                if (!isLocked)
                {
                    content.SetValue("MetaTitle", seoData.MetaTitle);
                    content.SetValue("MetaDescription", seoData.MetaDescription);

                    // Vi gemmer JSON-LD som en streng
                    var jsonLdString = JsonSerializer.Serialize(seoData.JsonLd);
                    content.SetValue("SchemaMarkup", jsonLdString);

                    // SaveAndPublish() publicerer med det samme.
                    // Guard i SeoPublishHandler forhindrer uendelig loop.
                    _contentService.Save(content);

                    // Publish via IContentPublishingService (Umbraco 17 API)
                    var publishModel = new CulturePublishScheduleModel { Culture = "*" };
                    await _contentPublishingService.PublishAsync(content.Key, new[] { publishModel }, Constants.Security.SuperUserKey);
                    _logger.LogInformation("✅ SEO data gemt succesfuldt for '{Name}'", content.Name);
                }
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "❌ Fejl under SEO-automatisering for node {Id}", contentId);
        }
    }
}