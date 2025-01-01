import { alias, css, plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins,
  css,
  resolve: {
    alias: alias(import.meta.url),
  },
})
