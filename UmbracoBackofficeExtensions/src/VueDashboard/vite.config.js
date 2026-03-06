import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) =>
                        tag.startsWith('uui-') || tag.startsWith('umb-'),
                },
            }
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            formats: ['es'],
            fileName: 'vue-dashboard',
        },
        outDir: resolve(__dirname, '../../wwwroot/BackofficeExtensions'),
        emptyOutDir: false,
        sourcemap: true,
        cssCodeSplit: false,
        rollupOptions: {
            external: [
                /^@umbraco-cms\//,
            ],
        },
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('development'),
    },
})