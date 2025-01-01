import { alias, css, plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'
import { staticFilehashPlugin } from 'vite-plugin-static-filehash'

export default defineConfig({
  base: './',
  plugins: [
    ...plugins,
    staticFilehashPlugin(),
  ],
  css,
  resolve: {
    alias: alias(import.meta.url),
  },
})
