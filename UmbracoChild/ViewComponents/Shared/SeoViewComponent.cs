using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using UmbracoChild.ViewModels;

namespace UmbracoChild.ViewComponents.Shared
{
    public class SeoViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(ISharedSeo seo)
        {
            SeoViewModel model = new SeoViewModel
            {
                MetaTitle = seo.MetaTitle,
                MetaDescription = seo.MetaDescription,
                CanonicalLinkUrl = seo.CanonicalLink?.Url(mode: UrlMode.Absolute),

                OgTitle = string.IsNullOrWhiteSpace(seo.OgTitle) ? seo.MetaTitle : seo.OgTitle,
                OgDescription = string.IsNullOrWhiteSpace(seo.OgDescription) ? seo.MetaDescription : seo.OgDescription,
            };

            if (seo.OgImage != null)
            {
                model.HasOgImage = true;
                model.OgImageUrl = seo.OgImage.GetCropUrl("umbracoFile", "small", urlMode: UrlMode.Absolute);
            }

            model.Follow = seo.NoFollow ? "nofollow" : "follow";
            model.Index = seo.NoIndex ? "noindex" : "index";
            model.SchemaMarkup = seo.SchemaMarkup;

            return View(model);
        }
    }
}
