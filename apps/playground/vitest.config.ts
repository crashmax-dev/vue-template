import { playwright } from '@vitest/browser-playwright'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: 'playground',
      root: './src',
      setupFiles: ['./vitest.setup.ts'],
      include: ['**/*.test.ts'],
      browser: {
        enabled: true,
        headless: true,
        provider: playwright(),
        instances: [
          { browser: 'chromium' },
        ],
        viewport: {
          width: 1280,
          height: 720,
        },
      },
    },
  }),
)
