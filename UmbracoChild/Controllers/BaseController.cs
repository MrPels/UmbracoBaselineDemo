using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.ActionsResults;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Cms.Web.Common.Routing;

namespace UmbracoChild.Controllers
{
    public class BaseController : RenderController
    {
        private const string RedirectStatuscodeTemporarily = "302 Temporarily Moved";

        public BaseController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine, IUmbracoContextAccessor umbracoContextAccessor) : base(logger, compositeViewEngine, umbracoContextAccessor)
        {
        }

        public override IActionResult Index()
        {
            if (CurrentPage is ISharedRedirect)
            {
                //vi skal ha en content tree notifiucation handler in og så skal vi override icon der 
                //builder.AddNotificationHandler<ContentTreeChangeNotification, ContentTreeChangeDistributedCacheNotificationHandler>();
                ISharedRedirect? redirectSettings = CurrentPage as ISharedRedirect;
                if (ShouldRedirect(redirectSettings))
                {
                    return PreformRedirect(redirectSettings);
                }
            }

            return CurrentTemplate(CurrentPage);
        }

        private IActionResult PreformRedirect(ISharedRedirect? redirectSettings)
        {
            Link? redirectUrl = redirectSettings?.RedirectUrl;
            string? redirectStatusCode = string.IsNullOrWhiteSpace(redirectSettings?.StatusCode) ? RedirectStatuscodeTemporarily : redirectSettings.StatusCode;

            if (redirectStatusCode.Equals(RedirectStatuscodeTemporarily))
            {
                return Redirect(redirectUrl?.Url ?? "/");
            }

            return RedirectPermanent(redirectUrl?.Url ?? "/");
        }

        private bool ShouldRedirect(ISharedRedirect? redirectSettings)
        {
            if (redirectSettings == null)
                return false;

            if (redirectSettings.DisableRedirect)
                return false;

            if (redirectSettings.RedirectUrl == null)
                return false;

            return true;
        }
    }

    public class AsyncBaseController : RenderController
    {
        private const string RedirectStatuscodeTemporarily = "302 Temporarily Moved";

        public AsyncBaseController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine, IUmbracoContextAccessor umbracoContextAccessor) : base(logger, compositeViewEngine, umbracoContextAccessor)
        {
        }

        [NonAction]
        public sealed override IActionResult Index() => throw new NotImplementedException();

        #pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        public virtual async Task<IActionResult> Index(CancellationToken cancellationToken)
        #pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
        {
            return CurrentTemplate(CurrentPage);
        }

        protected override IActionResult CurrentTemplate<T>(T model)
        {
            if (model is ISharedRedirect)
            {
                ISharedRedirect? redirectSettings = CurrentPage as ISharedRedirect;
                if (ShouldRedirect(redirectSettings))
                {
                    return PreformRedirect(redirectSettings);
                }
            }

            if (EnsurePhysicalViewExists(UmbracoRouteValues.TemplateName) == false)
            {
                return new PublishedContentNotFoundResult(UmbracoContext);
            }

            return View(UmbracoRouteValues.TemplateName, model);
        }

        private IActionResult PreformRedirect(ISharedRedirect? redirectSettings)
        {
            Link? redirectUrl = redirectSettings?.RedirectUrl;
            string? redirectStatusCode = string.IsNullOrWhiteSpace(redirectSettings?.StatusCode) ? RedirectStatuscodeTemporarily : redirectSettings.StatusCode;

            if (redirectStatusCode.Equals(RedirectStatuscodeTemporarily))
            {
                return Redirect(redirectUrl?.Url ?? "/");
            }

            return RedirectPermanent(redirectUrl?.Url ?? "/");
        }

        private bool ShouldRedirect(ISharedRedirect? redirectSettings)
        {
            if (redirectSettings == null)
                return false;

            if (redirectSettings.DisableRedirect)
                return false;

            if (redirectSettings.RedirectUrl == null)
                return false;

            return true;
        }
    }
}