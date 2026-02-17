import { UMB_DOCUMENT_ENTITY_TYPE as t } from "@umbraco-cms/backoffice/document";
const e = "semler.redirects.section", i = [
  {
    type: "section",
    alias: e,
    name: "Custom Redirects",
    weight: 10,
    meta: {
      label: "Redirects",
      pathname: "Redirects"
    }
  },
  {
    type: "dashboard",
    name: "Custom Redirects Dashboard",
    alias: "custom.redirects.dashboard",
    elementName: "custom-redirects-dashboard",
    element: () => import("./redirect-list-element-CqM6FyN4.js"),
    weight: -10,
    meta: {
      label: "custom-redirects",
      pathname: "custom-redirects"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: e
      }
    ]
  }
], a = [
  {
    type: "entitySign",
    kind: "icon",
    alias: "Custom.EntitySign.Document.HasRedirect",
    name: "Has Redirect Document Entity Sign",
    forEntityTypes: [t],
    forEntityFlags: ["Umb.HasRedirect"],
    weight: 900,
    meta: {
      iconName: "material-outlined-arrow_outward",
      label: "Has Redirect",
      iconColorAlias: "text"
    }
  }
], o = [
  ...i,
  ...a
];
export {
  o as manifests
};
//# sourceMappingURL=custom-backoffice-extensions.js.map
