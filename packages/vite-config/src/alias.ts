import { fileURLToPath } from 'node:url'
import type { AliasOptions } from 'vite'

export function alias(base: string): AliasOptions {
  return {
    '@': fileURLToPath(new URL('./src', base)),
  }
}
