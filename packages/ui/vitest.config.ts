import { plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: plugins(),
  test: {
    environment: 'happy-dom',
    setupFiles: './vitest.setup.ts',
  },
})
