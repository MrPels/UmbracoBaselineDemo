const SECTION_ALIAS = "semler.redirects.section";
//const SECTION_VIEW_ALIAS = "semler.redirects.createview";
export const manifests: Array<UmbExtensionManifest> = [
    {
        type: 'section',
        alias: SECTION_ALIAS,
        name: 'Custom Redirects',
        weight: 10,
        meta: {
            label: 'Redirects',
            pathname: 'Redirects'
        }
    },
    {
        type: 'dashboard',
        name: 'Custom Redirects Dashboard',
        alias: 'custom.redirects.dashboard',
        elementName: 'custom-redirects-dashboard',
        element: () => import('./redirect-list-element.js'),
        weight: -10,
        meta: {
            label: 'custom-redirects',
            pathname: 'custom-redirects'
        },
        conditions: [
            {
                alias: 'Umb.Condition.SectionAlias',
                match: SECTION_ALIAS
            }
        ]
    }
]