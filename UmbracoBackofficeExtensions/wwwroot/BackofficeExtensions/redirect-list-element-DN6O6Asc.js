import { UmbElementMixin as b } from "@umbraco-cms/backoffice/element-api";
import { LitElement as n, html as i, css as h, property as d, customElement as p } from "@umbraco-cms/backoffice/external/lit";
var f = Object.defineProperty, m = Object.getOwnPropertyDescriptor, c = (e, u, r, a) => {
  for (var t = a > 1 ? void 0 : a ? m(u, r) : u, s = e.length - 1, o; s >= 0; s--)
    (o = e[s]) && (t = (a ? o(u, r, t) : o(t)) || t);
  return a && t && f(u, r, t), t;
};
let l = class extends b(n) {
  constructor() {
    super(), this.redirects = [], this.title = "Liste af redirects";
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchData();
  }
  async fetchData() {
    fetch("/api/redirectManagement/getall").then((e) => e.json()).then((e) => {
      this.redirects = e;
    }).catch(() => {
    });
  }
  getStatusBadge(e) {
    return e.disabled ? i`<uui-tag size="s" look="primary" color="warning">Inaktiv</uui-tag>` : i`<uui-tag size="s" look="primary" color="positive">Aktiv</uui-tag>`;
  }
  render() {
    return i`
            <uui-box headline="${this.title}" headline-variant="h2">

            <uui-table id="users-wrapper">
				<uui-table-row>
                    <uui-table-head-cell>Status</uui-table-head-cell>
					<uui-table-head-cell>Redirected fra</uui-table-head-cell>
					<uui-table-head-cell>Redirected til</uui-table-head-cell>
                    <uui-table-head-cell>Status kode</uui-table-head-cell>
					<uui-table-head-cell>Rediger</uui-table-head-cell>
				</uui-table-row>
				 ${this.redirects.map((e) => i`
                            <uui-table-row class="user">
                                <uui-table-cell>
                                    ${this.getStatusBadge(e)}
                                </uui-table-cell>
                                <uui-table-cell>
                                    <uui-icon-registry-essential>
                                        <uui-icon name="link" style="padding-bottom:4px;"></uui-icon>
                                    </uui-icon-registry-essential>
                                    ${e.from}
                                </uui-table-cell>
                                <uui-table-cell>${e.to}</uui-table-cell>
                                    <uui-table-cell>${e.statusCode}</uui-table-cell>
                                <uui-table-cell><a href="${e.edit}">Rediger siden</a></uui-table-cell>
                            </uui-table-row>
                        `)}
			</uui-table>
            </uui-box>
        `;
  }
};
l.styles = [
  h`
		:host {
			display: block;
			padding: var(--uui-size-layout-1);
		}

		uui-table-head-cell {
			font-weight: bold;
		}

		.user:hover,
		.user:focus {
			cursor: pointer;
			background-color: var(--uui-color-surface-alt);
		}
	`
];
c([
  d({ attribute: !1 })
], l.prototype, "redirects", 2);
c([
  d()
], l.prototype, "title", 2);
l = c([
  p("custom-redirects-dashboard")
], l);
const y = l;
export {
  l as Custom_Redirects_Dashboard,
  y as default
};
//# sourceMappingURL=redirect-list-element-DN6O6Asc.js.map
