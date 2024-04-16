import { type InjectionKey, type Ref, inject } from 'vue'

export type Theme = 'light' | 'dark'

export interface UseTheme {
  theme: Ref<Theme>
  toggleTheme: () => void
}

export const uiThemeInjectionKey = Symbol('ui-theme') as InjectionKey<UseTheme>

export function useTheme() {
  const theme = inject(uiThemeInjectionKey)

  if (!theme) {
    throw new Error('useTheme must be used within a UiThemeProvider')
  }

  return theme
}
