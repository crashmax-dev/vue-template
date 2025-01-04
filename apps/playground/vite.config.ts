import { alias, css, plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  css,
  plugins: plugins({
    devtools: true,
    devtoolsOptions: {
      componentInspector: false,
    },
  }),
  resolve: {
    alias: alias(import.meta.url),
  },
})
