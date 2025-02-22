import {
  alias,
  iconsPlugin,
  staticCopyPlugin,
  vuePlugin,
} from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  plugins: [
    vuePlugin,
    iconsPlugin,
    staticCopyPlugin,
  ],
  resolve: {
    alias: alias(import.meta.url),
  },
})
