// Patch SKAL importeres FØR vue, så createElement er patched
// inden Vue's runtime initialiseres
import './patch-create-element.js'

import { createApp } from 'vue'
import BrandDashboard from './components/BrandDashboard.vue'

// Manuelt custom element der wrapper Vue-appen.
// Vi bruger createApp i stedet for defineCustomElement for at undgå
// "The result must not have attributes" fejlen.
class SemlerBrandDashboard extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div')
        this.appendChild(mountPoint)

        this._app = createApp(BrandDashboard)
        // Giv host-elementet (custom element) til Vue via provide/inject
        this._app.provide('hostElement', this)
        this._app.mount(mountPoint)

        console.log('[Vue Dashboard] Mounted semler-brand-dashboard')
    }

    disconnectedCallback() {
        if (this._app) {
            this._app.unmount()
            this._app = null
        }
        this.innerHTML = ''
        console.log('[Vue Dashboard] Unmounted semler-brand-dashboard')
    }
}

customElements.define('semler-brand-dashboard', SemlerBrandDashboard)