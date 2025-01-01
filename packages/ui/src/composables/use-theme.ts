import { inject, type InjectionKey } from 'vue'

import type { RemovableRef } from '@vueuse/core'

export type Theme = 'light' | 'dark'

export interface UseTheme {
  theme: RemovableRef<Theme>
  setTheme: (theme?: Theme) => void
}

export const useThemeInjectionKey = Symbol('v-use-theme') as InjectionKey<UseTheme>

export function useTheme(): UseTheme {
  const theme = inject(useThemeInjectionKey)

  if (!theme) {
    throw new Error('useTheme must be used within a UiThemeProvider')
  }

  return theme
}
