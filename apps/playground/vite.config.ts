import { alias, css, plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  css,
  resolve: {
    alias: alias(import.meta.url),
  },
})
