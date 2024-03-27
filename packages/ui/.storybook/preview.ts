import type { Preview } from '@storybook/vue3'
import { vueTemplateDecorator } from './vue-template-decorator.js'
import './style.css'

const preview: Preview = {
  decorators: [vueTemplateDecorator],
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
