/// <reference types="vite/client" />

import type { Collection } from '@msw/data/collection'

declare global {
  interface Window {
    __MSW__: Record<string, {
      collection: Collection
      setupMocks: () => void
    }>
  }
}
