// Patch SKAL importeres FØR vue, så createElement er patched
// inden Vue's runtime initialiseres
import './patch-create-element.js'

import { createApp } from 'vue'
import BrandDashboard from './components/BrandDashboard.vue'

// Import CSS as raw string (Vite ?inline suffix)
// Vi injicerer den manuelt i DOM'en tæt på elementet,
// så den virker inden i Umbraco's shadow DOM.
import cssText from '../src/styles.css?inline'

// Manuelt custom element der wrapper Vue-appen.
// Vi bruger createApp i stedet for defineCustomElement for at undgå
// "The result must not have attributes" fejlen.
class SemlerBrandDashboard extends HTMLElement {
    connectedCallback() {
        // Inject styles i den nærmeste shadow root (Umbraco's Lit-komponent)
        // eller i <head> som fallback. Styles i document.head kan ikke
        // krydse shadow DOM grænsen, så vi SKAL injicere i shadow root'en.
        const root = this.getRootNode()
        if (root && !root.querySelector('#vue-dashboard-styles')) {
            const style = document.createElement('style')
            style.id = 'vue-dashboard-styles'
            style.textContent = cssText
            if (root instanceof ShadowRoot) {
                root.appendChild(style)
            } else {
                // Fallback: light DOM — formentlig document
                document.head.appendChild(style)
            }
        }

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