using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.ChatCompletion;

public class MediaAiService
{
    private readonly IChatCompletionService _visionService;

    public MediaAiService(Kernel kernel)
    {
        // Vi henter specifikt vision-modellen
        _visionService = kernel.GetRequiredService<IChatCompletionService>("VisionService");
    }

    //TODO: Implementer metoder til at analysere billeder og generere alt-tekst
}