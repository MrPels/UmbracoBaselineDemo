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
            iconName: "material-outlined-arrow_outward",
            label: "Has Redirect",
            iconColorAlias: "text",
        },
    },
];