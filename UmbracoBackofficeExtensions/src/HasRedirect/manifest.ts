import { UMB_DOCUMENT_ENTITY_TYPE } from "@umbraco-cms/backoffice/document";

export const manifests: Array<UmbExtensionManifest> = [
    {
        type: "entitySign",
        kind: "icon",
        alias: "Custom.EntitySign.Document.HasRedirect",
        name: "Has Redirect Document Entity Sign",
        forEntityTypes: [UMB_DOCUMENT_ENTITY_TYPE],
        forEntityFlags: ["Umb.HasRedirect"],
        weight: 900,
        meta: {
            iconName: "icon-arrow-up",
            label: "Has Redirect",
            iconColorAlias: "warning",
        },
    },
];