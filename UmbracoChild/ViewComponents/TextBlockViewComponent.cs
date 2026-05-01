using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.PublishedModels;
using UmbracoChild.ViewComponents.Base;

namespace UmbracoChild.ViewComponents
{
    public class TextBlockViewComponent : BaseViewComponent<TextBlock>
    {
        public TextBlockViewComponent(IUmbracoContextAccessor umbracoContextAccessor, IPublishedValueFallback publishedValueFallback) : base(umbracoContextAccessor, publishedValueFallback)
        {
        }
    }
}
