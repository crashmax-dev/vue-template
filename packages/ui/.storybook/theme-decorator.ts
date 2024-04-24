import ThemeProvider from '../src/providers/theme-provider.vue'

import type { Decorator } from '@storybook/vue3'

export const themeDecorator: Decorator = (story, context) => {
  const theme = context.globals.theme || 'light'
  localStorage.removeItem('theme')

  return {
    components: { story, ThemeProvider },
    template: `
      <theme-provider initial-theme="${theme}">
        <story />
      </theme-provider>
    `
  }
}
