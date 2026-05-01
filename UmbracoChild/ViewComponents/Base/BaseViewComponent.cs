using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.Blocks;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;

namespace UmbracoChild.ViewComponents.Base
{
    public abstract class BaseViewComponent<T> : ViewComponent where T : PublishedElementModel
    {
        protected readonly IUmbracoContextAccessor _umbracoContextAccessor;
        protected readonly IPublishedValueFallback _publishedValueFallback;

        protected BaseViewComponent(IUmbracoContextAccessor umbracoContextAccessor, IPublishedValueFallback publishedValueFallback)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
            _publishedValueFallback = publishedValueFallback;
        }

        public virtual IViewComponentResult CustomInvoke(IPublishedElement publishedElement)
        {
            T? model = Activator.CreateInstance(typeof(T), publishedElement, _publishedValueFallback) as T;
            return View(model);
        }

        public IViewComponentResult Invoke(BlockGridItem publishedElement)
        {
            return CustomInvoke(publishedElement.Content);
        }

        //protected string GetViewPath(string alias)
        //{
        //    return alias;
        //}
    }
}
