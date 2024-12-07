import type { CSSOptions } from 'vite'

export const css: CSSOptions = {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
    },
  },
}
