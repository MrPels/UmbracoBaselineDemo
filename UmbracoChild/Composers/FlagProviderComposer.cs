using Umbraco.Cms.Core.Composing;
using UmbracoChild.FlagProviders;

namespace UmbracoChild.Composers
{
    public class FlagProviderComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.FlagProviders()
                .Append<RedirectFlagProvider>();
        }
    }
}
