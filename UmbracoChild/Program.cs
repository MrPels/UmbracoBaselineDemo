using Microsoft.AspNetCore.Mvc;
using Microsoft.SemanticKernel;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// // AddKernel registrerer 'Kernel' objektet i din Dependency Injection (DI)
// builder.Services.AddKernel()
//     // Model til tekst-opgaver (SEO og JSON Schema)
//     .AddAzureOpenAIChatCompletion(
//         deploymentName: "gpt-4o-mini", // En billig/hurtig model
//         endpoint: azureEndpoint,
//         apiKey: azureApiKey,
//         serviceId: "SeoTextService"   // Her er det unikke ID
//     )
//     // Model til Vision-opgaver (Auto-alt tekst)
//     .AddAzureOpenAIChatCompletion(
//         deploymentName: "gpt-4o",      // En kraftig model med vision-evner
//         endpoint: azureEndpoint,
//         apiKey: azureApiKey,
//         serviceId: "VisionService"    // Her er det andet ID
//     );

builder.Services.AddControllers(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);
builder.Services.Configure<ApiBehaviorOptions>(options => options.SuppressModelStateInvalidFilter = true);

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
