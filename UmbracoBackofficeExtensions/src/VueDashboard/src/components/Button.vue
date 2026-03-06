<!-- filepath: src/VueDashboard/src/components/BrandDashboard.vue -->
<template>
    <button class="btn btn-primary" v-on:click="addToCounter">Click me ({{ counter }})</button>
</template>

<script>
    import { defineComponent } from 'vue'
    //import { apiGet, notify } from '../services/umbraco'

    export default defineComponent({
        name: 'Button',

        // Host-elementet (custom element) injiceres fra createApp().provide()
        //inject: ['hostElement'],

        data() {
            return {
                counter: 0
            }
        },

        methods: {
            addToCounter: function () {
                this.counter++;
            }
        },
    })
</script>