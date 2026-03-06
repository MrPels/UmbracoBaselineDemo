/**
 * Patch: UUI custom elements (uui-box, uui-button, etc.) sætter attributter
 * i deres constructor, f.eks. this.setAttribute('role', 'region').
 *
 * Custom Elements spec siger at document.createElement() skal kaste
 * NotSupportedError hvis constructor'en sætter attributter på elementet.
 *
 * Lit/Umbraco undgår dette ved at bruge HTML-parseren (<template>.innerHTML)
 * som IKKE har denne begrænsning.
 *
 * Denne patch bruger HTML-parseren direkte for alle registrerede custom
 * elements, i stedet for at kalde den originale createElement.
 */

const origCreateElement = Document.prototype.createElement
const fallbackTemplate = origCreateElement.call(document, 'template')

Document.prototype.createElement = function (tagName, options) {
    // For registrerede custom elements: brug altid HTML-parseren
    // (samme mekanisme som Lit bruger internt)
    if (
        !options &&
        typeof tagName === 'string' &&
        tagName.includes('-') &&
        customElements.get(tagName)
    ) {
        fallbackTemplate.innerHTML = `<${tagName}></${tagName}>`
        const el = fallbackTemplate.content.removeChild(
            fallbackTemplate.content.firstElementChild
        )
        return el
    }
    return origCreateElement.call(this, tagName, options)
}

console.debug('[createElement patch] Active')
