using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace UmbracoChild.Controllers.Api
{
    [Route("/api/redirectManagement")]
    public class RedirectManagementController : ControllerBase
    {

        private readonly IPublishedContentQuery _publishedContentQuery;

        public RedirectManagementController(IPublishedContentQuery publishedContentQuery)
        {
            _publishedContentQuery = publishedContentQuery;
        }

        [HttpGet("getall")]
        public IEnumerable<RedirectUmbracoModel> GetAll()
        {
            List<RedirectUmbracoModel> list = new List<RedirectUmbracoModel>();
            IPublishedContent? home = _publishedContentQuery.ContentAtRoot().FirstOrDefault(x => x.ContentType.Alias.Equals("homePage"));
            if (home != null)
            {
                ProcessRedirectsRecursive(home, list);
            }

            return list;
        }

        [NonAction]
        private void ProcessRedirectsRecursive(IPublishedContent parent, List<RedirectUmbracoModel> redirects)
        {

            if (parent is ISharedRedirect)
            {
                ISharedRedirect? sharedRedirectSettings = parent as ISharedRedirect;

                Link? link = sharedRedirectSettings?.RedirectUrl;
                if (link != null)
                {
                    bool? disabled = sharedRedirectSettings?.DisableRedirect;

                    string? statusCode = string.IsNullOrWhiteSpace(sharedRedirectSettings?.StatusCode) ? "302 Temporarily Moved" : sharedRedirectSettings.StatusCode;

                    redirects.Add(new RedirectUmbracoModel
                    {
                        From = $"{parent.Name} ({parent.Url()})",
                        To = link?.Url,
                        StatusCode = statusCode,
                        Disabled = disabled,
                        Edit = $"/umbraco/section/content/workspace/document/edit/{parent.Key}/invariant/tab/redirect"
                    });
                }

            }

            if (parent.Children() != null)
            {
                foreach (var child in parent.Children())
                {
                    ProcessRedirectsRecursive(child, redirects);
                }
            }
        }
    }

    public class RedirectUmbracoModel
    {
        public string From { get; set; }
        public string? To { get; set; }
        public string StatusCode { get; set; }
        public bool? Disabled { get; set; }
        public string Edit { get; set; }
    }
}
