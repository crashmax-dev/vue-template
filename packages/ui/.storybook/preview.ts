import { templateDecorator } from './template-decorator.js'
import { themeDecorator } from './theme-decorator.js'

import type { Preview } from '@storybook/vue3'

import '../src/themes/zinc.css'
import './style.css'

const preview: Preview = {
  decorators: [templateDecorator, themeDecorator],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
