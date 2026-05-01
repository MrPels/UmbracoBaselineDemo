using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.PublishedModels;
using UmbracoChild.ViewComponents.Base;

namespace UmbracoChild.ViewComponents
{
    public class HeadlineBlockViewComponent : BaseViewComponent<HeadlineBlock>
    {
        public HeadlineBlockViewComponent(IUmbracoContextAccessor umbracoContextAccessor, IPublishedValueFallback publishedValueFallback) : base(umbracoContextAccessor, publishedValueFallback)
        {
        }
    }
}
