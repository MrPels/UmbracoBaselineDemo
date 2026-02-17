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
            List<TItem> items = itemViewModels.ToList();

            // Extract Guid IDs from the actual response model types
            List<Guid> ids = items
                .Select(GetId)
                .Where(id => id.HasValue)
                .Select(id => id!.Value)
                .ToList();

            if (ids.Count == 0)
            {
                return Task.CompletedTask;
            }

            Dictionary<Guid, IContent> contentItems = _contentService.GetByIds(ids)
                .ToDictionary(c => c.Key);

            foreach (TItem item in items)
            {
                Guid? itemId = GetId(item);
                if (itemId.HasValue && contentItems.TryGetValue(itemId.Value, out var content))
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

        private static Guid? GetId<TItem>(TItem item) => item switch
        {
            DocumentTreeItemResponseModel tree => tree.Id,
            DocumentCollectionResponseModel collection => collection.Id,
            DocumentItemResponseModel docItem => docItem.Id,
            _ => null,
        };
    }
}
