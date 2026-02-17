import { UMB_DOCUMENT_ENTITY_TYPE as e } from "@umbraco-cms/backoffice/document";
const t = "custom.redirects.section", i = [
  {
    type: "section",
    alias: t,
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
    element: () => import("./redirect-list-element-DN6O6Asc.js"),
    weight: -10,
    meta: {
      label: "custom-redirects",
      pathname: "custom-redirects"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: t
      }
    ]
  }
], a = [
  {
    type: "entitySign",
    kind: "icon",
    alias: "Custom.EntitySign.Document.HasRedirect",
    name: "Has Redirect Document Entity Sign",
    forEntityTypes: [e],
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
