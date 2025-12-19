import { tailwindPlugin, vuePlugin } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vuePlugin,
    tailwindPlugin(),
  ],
})
