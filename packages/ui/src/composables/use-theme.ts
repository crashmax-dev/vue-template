import { type Ref, inject } from 'vue'

export type Theme = 'light' | 'dark'

export interface UseTheme {
  theme: Ref<Theme>
  toggleTheme: () => void
}

export function useTheme() {
  const theme = inject<UseTheme>('ui-theme')

  if (!theme) {
    throw new Error('useTheme must be used within a UiThemeProvider')
  }

  return theme
}
