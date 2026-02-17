using Umbraco.Cms.Api.Management.Services.Flags;
using Umbraco.Cms.Api.Management.ViewModels;
using Umbraco.Cms.Api.Management.ViewModels.Document.Collection;
using Umbraco.Cms.Api.Management.ViewModels.Document.Item;
using Umbraco.Cms.Api.Management.ViewModels.Tree;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace UmbracoChild.FlagProviders
{
    public class RedirectFlagProvider : IFlagProvider
    {
        private const string Alias = Constants.Conventions.Flags.Prefix + "HasRedirect";
        private const string RedirectPropertyAlias = "redirectUrl";
        private const string DisableRedirectPropertyAlias = "disableRedirect";

        private readonly IContentService _contentService;

        public RedirectFlagProvider(IContentService contentService)
        {
            _contentService = contentService;
        }

        public bool CanProvideFlags<TItem>()
            where TItem : IHasFlags =>
            typeof(TItem) == typeof(DocumentTreeItemResponseModel) ||
            typeof(TItem) == typeof(DocumentCollectionResponseModel) ||
            typeof(TItem) == typeof(DocumentItemResponseModel);


        public Task PopulateFlagsAsync<TItem>(IEnumerable<TItem> itemViewModels) where TItem : IHasFlags
        {
            // Collect all IDs upfront to avoid N+1 queries
            List<TItem> items = itemViewModels.ToList();
            List<Guid> ids = items
                .OfType<ISharedRedirect>()
                .Select(x => x.Key)
                .ToList();

            Dictionary<Guid, IContent> contentItems = _contentService.GetByIds(ids)
                .ToDictionary(c => c.Key);

            foreach (TItem item in items)
            {
                if (item is ISharedRedirect identifiable && contentItems.TryGetValue(identifiable.Key, out var content))
                {
                    string? redirectValue = content.GetValue<string>(RedirectPropertyAlias);
                    bool disableRedirect = content.GetValue<bool>(DisableRedirectPropertyAlias);

                    if (!string.IsNullOrWhiteSpace(redirectValue) && !disableRedirect)
                    {
                        item.AddFlag(Alias);
                    }
                }
            }

            return Task.CompletedTask;
        }
    }
}
