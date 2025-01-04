import type { CSSOptions } from 'vite'

// remove this after updating Vite to 6.0
// https://github.com/vitejs/vite/issues/18164
export const css: CSSOptions = {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
    },
  },
}
