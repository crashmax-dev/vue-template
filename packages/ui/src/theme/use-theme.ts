import { inject } from 'vue'
import type { RemovableRef } from '@vueuse/core'
import type { InjectionKey } from 'vue'

export type Theme = 'light' | 'dark'

export interface UseTheme {
  theme: RemovableRef<Theme>
  toggleTheme: () => void
}

export const useThemeInjectionKey = Symbol('v-use-theme') as InjectionKey<UseTheme>

export function useTheme(): UseTheme {
  const theme = inject(useThemeInjectionKey)

  if (!theme) {
    throw new Error('useTheme must be used within a VThemeProvider')
  }

  return theme
}
