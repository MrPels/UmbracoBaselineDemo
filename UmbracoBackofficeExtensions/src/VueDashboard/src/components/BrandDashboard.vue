<!-- filepath: src/VueDashboard/src/components/BrandDashboard.vue -->
<template>
    <div class="brand-dashboard">
        <uui-loader-bar v-if="loading" />

        <uui-box headline="Velkommen" v-if="currentUser">
            <p>
                Logget ind som <strong>{{ currentUser.name }}</strong>
            </p>
        </uui-box>

        <div class="dashboard-grid" style="margin-top: 16px;">
            <uui-box v-for="stat in stats" :key="stat.label">
                <div class="stat-card">
                    <span class="stat-value">{{ stat.value }}</span>
                    <span class="stat-label">{{ stat.label }}</span>
                </div>
            </uui-box>
        </div>

        <uui-box headline="Senest opdateret content" style="margin-top: 16px;">
            <uui-table v-if="documents.length">
                <uui-table-head>
                    <uui-table-head-cell>Navn</uui-table-head-cell>
                    <uui-table-head-cell>Type</uui-table-head-cell>
                    <uui-table-head-cell>Status</uui-table-head-cell>
                    <uui-table-head-cell>Opdateret</uui-table-head-cell>
                </uui-table-head>
                <uui-table-row v-for="doc in documents" :key="doc.id">
                    <uui-table-cell>{{ getDocumentName(doc) }}</uui-table-cell>
                    <uui-table-cell>
                        <uui-tag look="secondary">
                            {{ getDocumentTypeAlias(doc) }}
                        </uui-tag>
                    </uui-table-cell>
                    <uui-table-cell>
                        <uui-tag :color="getStatusColor(doc)" look="primary">
                            {{ getStatusLabel(doc) }}
                        </uui-tag>
                    </uui-table-cell>
                    <uui-table-cell>{{ formatDate(doc) }}</uui-table-cell>
                </uui-table-row>
            </uui-table>
            <p v-else-if="!loading">Ingen content fundet.</p>
        </uui-box>

        <uui-box headline="Hurtige handlinger" style="margin-top: 16px;">
            <uui-button look="primary"
                    color="positive"
                    label="Opdater"
                    v-on:click="refreshAll" />

            <semler-button></semler-button>
        </uui-box>

        <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { apiGet, notify } from '../services/umbraco'

    import Button from './Button.vue'

    export default defineComponent({
        name: 'BrandDashboard',

        // Host-elementet (custom element) injiceres fra createApp().provide()
        inject: ['hostElement'],

        components: {
            'semler-button': Button
        },

        data() {
            return {
                loading: true,
                error: null,
                currentUser: null,
                documents: [],
                stats: [
                    { label: 'Sider', value: '–' },
                    { label: 'Media', value: '–' },
                    { label: 'Sprog', value: '–' },
                    { label: 'Dokumenttyper', value: '–' },
                ],
            }
        },

        async mounted() {
            console.log('[Vue] Host element:', this.hostElement?.tagName)
            await this.refreshAll()
        },

        methods: {
            async api(endpoint) {
                return apiGet(this.hostElement, endpoint)
            },

            async refreshAll() {
                this.loading = true
                this.error = null
                try {
                    await Promise.all([
                        this.loadUser(),
                        this.loadDocuments(),
                        this.loadStats(),
                    ])
                    notify(this.hostElement, 'positive', 'Dashboard klar', 'Data loaded!')
                } catch (e) {
                    console.error('[Vue] Refresh fejlede:', e)
                    this.error = e.message
                } finally {
                    this.loading = false
                }
            },

            async loadUser() {
                this.currentUser = await this.api('/user/current')
            },

            async loadDocuments() {
                // Management API: tree/document/root returnerer PagedDocumentTreeItemResponseModel
                const data = await this.api('/tree/document/root?skip=0&take=10')
                this.documents = data.items ?? []
            },

            async loadStats() {
                const [documents, media, languages, docTypes] = await Promise.all([
                    // tree/document/root for at tælle content nodes
                    this.api('/tree/document/root?skip=0&take=0'),
                    // collection/media kræver id — brug tree/media/root i stedet
                    this.api('/tree/media/root?skip=0&take=0'),
                    // language endpoint har GET med paging
                    this.api('/language'),
                    // tree/document-type/root for at tælle dokumenttyper
                    this.api('/tree/document-type/root?skip=0&take=0'),
                ])

                this.stats = [
                    { label: 'Sider', value: documents.total ?? 0 },
                    { label: 'Media', value: media.total ?? 0 },
                    { label: 'Sprog', value: languages.items?.length ?? 0 },
                    { label: 'Dokumenttyper', value: docTypes.total ?? 0 },
                ]
            },

            getDocumentName(doc) {
                return doc.variants?.[0]?.name ?? 'Uden navn'
            },

            getDocumentTypeAlias(doc) {
                return doc.documentType?.alias ?? 'Ukendt'
            },

            getStatusColor(doc) {
                const state = doc.variants?.[0]?.state
                if (state === 'Published' || state === 'PublishedPendingChanges') return 'positive'
                if (state === 'Draft') return 'warning'
                return 'default'
            },

            getStatusLabel(doc) {
                const state = doc.variants?.[0]?.state
                if (state === 'Published') return 'Publiceret'
                if (state === 'PublishedPendingChanges') return 'Publiceret (ændringer)'
                if (state === 'Draft') return 'Kladde'
                return state ?? 'Ukendt'
            },

            formatDate(doc) {
                // tree/document/root items har createDate (ikke updateDate per variant)
                const date = doc.createDate
                if (!date) return '–'
                return new Date(date).toLocaleDateString('da-DK', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })
            },
        },
    })
</script>

<style>
    .brand-dashboard {
        padding: 20px;
        background-color: aqua;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }

    .stat-value {
        font-size: 2rem;
        font-weight: bold;
        color: var(--uui-color-interactive);
    }

    .stat-label {
        font-size: 0.875rem;
        color: var(--uui-color-text-alt);
        margin-top: 4px;
    }
</style>