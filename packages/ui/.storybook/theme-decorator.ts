import type { Decorator } from '@storybook/vue3'
import UiThemeProvider from '../src/ui-provider/ui-theme-provider.vue'

export const themeDecorator: Decorator = (story, context) => {
  const theme = context.globals.theme || 'light'
  return {
    components: { story, UiThemeProvider },
    template: `<ui-theme-provider theme="${theme}"><story /></ui-theme-provider>`
  }
}
