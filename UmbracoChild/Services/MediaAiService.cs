using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;

public class MediaAiService
{
    private readonly Kernel _kernel;
    private readonly ILogger<MediaAiService> _logger;

    public MediaAiService(Kernel kernel, ILogger<MediaAiService> logger)
    {
        _kernel = kernel;
        _logger = logger;
    }

    public async Task<string> GenerateAltTextAsync(byte[] imageBytes, string mimeType, string? fileName = null)
    {
        _logger.LogInformation("Generating alt text for image ({MimeType}, {Size} bytes, {FileName})", mimeType, imageBytes.Length, fileName ?? "unknown");

        var visionService = _kernel.GetRequiredService<IChatCompletionService>("VisionService");

        var prompt = "Beskriv dette billede i en enkelt kort sætning på dansk, som er egnet til brug som alt-tekst på en webside. Inkluder ikke noget præfiks som 'Alt-tekst:'.";
        if (!string.IsNullOrWhiteSpace(fileName))
        {
            prompt += $" Filnavnet er '{fileName}', som kan give kontekst om billedets indhold.";
        }

        var chatHistory = new ChatHistory();
        chatHistory.AddUserMessage(
        [
            new TextContent(prompt),
            new ImageContent(imageBytes, mimeType)
        ]);

        var response = await visionService.GetChatMessageContentAsync(chatHistory);
        var altText = response.Content?.Trim() ?? string.Empty;

        _logger.LogInformation("Generated alt text: {AltText}", altText);
        return altText;
    }
}