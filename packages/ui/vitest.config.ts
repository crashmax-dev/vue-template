import {
  iconsPlugin,
  staticCopyPlugin,
  vuePlugin,
} from '@vue-workspace/vite-config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    vuePlugin,
    iconsPlugin,
    staticCopyPlugin,
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
  },
})
