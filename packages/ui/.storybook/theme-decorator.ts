import ThemeProvider from '../src/providers/theme-provider.vue'

import type { Decorator } from '@storybook/vue3'

export const themeDecorator: Decorator = (story, context) => {
  const theme = context.globals.theme || 'light'

  return {
    components: { story, ThemeProvider },
    template: `
      <theme-provider theme="${theme}" force>
        <story />
      </theme-provider>
    `
  }
}
