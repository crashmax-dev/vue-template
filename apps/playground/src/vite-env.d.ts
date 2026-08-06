/// <reference types="vite/client" />

import type { Collection } from '@msw/data/collection'

interface ImportMetaEnv {
  readonly VITE_API_PROXY_TARGET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    __MSW__: Record<string, {
      collection: Collection
      createInitialData: () => void
    }>
  }
}
