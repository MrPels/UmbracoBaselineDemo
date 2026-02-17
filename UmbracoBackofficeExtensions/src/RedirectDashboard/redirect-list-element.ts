import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, css, customElement, property } from "@umbraco-cms/backoffice/external/lit";

@customElement('semler-redirects-dashboard')
export class Semler_Redirects_Dashboard extends UmbElementMixin(LitElement) {
    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback()
        this.fetchData()
    }

    async fetchData() {
        fetch('/api/redirectManagement/getall')
            .then(response => response.json())
            .then(data => {
                this.redirects = data;
            }).catch(() => {

     });
}
    @property({ attribute: false })
    redirects = [];

    @property()
    title = 'Liste af redirects'


    getStatusBadge(redirect : any) {
        if (redirect["disabled"]) {
            return html`<uui-tag size="s" look="primary" color="warning">Inaktiv</uui-tag>`;
        } else {
            return html`<uui-tag size="s" look="primary" color="positive">Aktiv</uui-tag>`;
        }
    }

    render() {
        return html`
            <uui-box headline="${this.title}" headline-variant="h2">

            <uui-table id="users-wrapper">
				<uui-table-row>
                    <uui-table-head-cell>Status</uui-table-head-cell>
					<uui-table-head-cell>Redirected fra</uui-table-head-cell>
					<uui-table-head-cell>Redirected til</uui-table-head-cell>
                    <uui-table-head-cell>Status kode</uui-table-head-cell>
					<uui-table-head-cell>Rediger</uui-table-head-cell>
				</uui-table-row>
				 ${this.redirects.map((redirect) =>
                     
                     html`
                            <uui-table-row class="user">
                                <uui-table-cell>
                                    ${this.getStatusBadge(redirect)}
                                </uui-table-cell>
                                <uui-table-cell>
                                    <uui-icon-registry-essential>
                                        <uui-icon name="link" style="padding-bottom:4px;"></uui-icon>
                                    </uui-icon-registry-essential>
                                    ${redirect["from"]}
                                </uui-table-cell>
                                <uui-table-cell>${redirect["to"]}</uui-table-cell>
                                    <uui-table-cell>${redirect["statusCode"]}</uui-table-cell>
                                <uui-table-cell><a href="${redirect["edit"]}">Rediger siden</a></uui-table-cell>
                            </uui-table-row>
                        `)}
			</uui-table>
            </uui-box>
        `
    }

    //Basic umbraco box spacing
    static styles = [
        css`
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
	`,
    ];
}

export default Semler_Redirects_Dashboard;

declare global {
    interface HtmlElementTagNameMap {
        'Custom-Redirects-Dashboard': Semler_Redirects_Dashboard
    }
}