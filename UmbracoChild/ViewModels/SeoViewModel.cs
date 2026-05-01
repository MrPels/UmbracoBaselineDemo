namespace UmbracoChild.ViewModels
{
    public class SeoViewModel
    {
        public string? MetaTitle { get; set; }
        public string? MetaDescription { get; set; }
        public string? OgTitle { get; set; }
        public string? OgDescription { get; set; }
        public string? OgImageUrl { get; set; }
        public bool? HasOgImage { get; set; }
        public string? SchemaMarkup { get; set; }
        public string? Follow { get; set; }
        public string? Index { get; set; }
        public string? BaseUrl { get; set; }
        public string? CanonicalLinkUrl { get; set; }
    }
}
