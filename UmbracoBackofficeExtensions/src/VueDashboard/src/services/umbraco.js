import { UmbContextConsumer } from '@umbraco-cms/backoffice/context-api'
// Importér de rigtige context tokens – IKKE strings!
import { UMB_AUTH_CONTEXT } from '@umbraco-cms/backoffice/auth'
import { UMB_NOTIFICATION_CONTEXT } from '@umbraco-cms/backoffice/notification'

const MANAGEMENT_API_BASE = '/umbraco/management/api/v1'
const DELIVERY_API_BASE = '/umbraco/delivery/api/v2'

let cachedToken = null

/**
 * Henter en Umbraco context via UmbContextConsumer.
 * hostElement skal være et HTMLElement der er connected til DOM'en.
 * Bruger one-time reference pattern (ingen callback).
 */
export async function requestContext(hostElement, contextAlias) {
    // Opret consumer UDEN callback = one-time use
    const consumer = new UmbContextConsumer(hostElement, contextAlias)

    try {
        consumer.hostConnected()
        const ctx = await consumer.asPromise()

        if (!ctx) {
            throw new Error('Context var null: ' + contextAlias.toString())
        }

        console.log('[Umbraco] Got context:', contextAlias.toString())
        return ctx
    } finally {
        consumer.hostDisconnected()
        consumer.destroy()
    }
}

export async function getAuthToken(hostElement) {
    if (cachedToken) return cachedToken

    const auth = await requestContext(hostElement, UMB_AUTH_CONTEXT)
    const config = await auth.getOpenApiConfiguration()

    // I Umbraco 17 er token typisk en funktion der returnerer en Promise
    const token = typeof config.token === 'function'
        ? await config.token()
        : config.token

    cachedToken = token
    console.log('[Umbraco] Got auth token')
    return cachedToken
}

export async function apiGet(hostElement, endpoint) {
    const token = await getAuthToken(hostElement)

    const response = await fetch(MANAGEMENT_API_BASE + endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })

    if (!response.ok) {
        throw new Error('Management API fejl: ' + response.status + ' ' + endpoint)
    }

    return response.json()
}

/**
 * Henter data fra Umbraco Delivery API v2.
 * Kræver IKKE auth token – bruger public endpoints.
 */
export async function deliveryApiGet(endpoint) {
    const response = await fetch(DELIVERY_API_BASE + endpoint, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (!response.ok) {
        throw new Error('Delivery API fejl: ' + response.status + ' ' + endpoint)
    }

    return response.json()
}

export async function notify(hostElement, color, headline, message) {
    try {
        const ctx = await requestContext(hostElement, UMB_NOTIFICATION_CONTEXT)
        ctx.peek(color, { data: { headline, message } })
    } catch (e) {
        console.log('[Notification fallback]', color, headline, message)
    }
}