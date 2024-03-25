import type { Meta, StoryObj } from '@storybook/vue3'

import UiButton from '../components/ui-button.vue'

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large']
    }
  }
}

export default meta

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<ui-button v-bind="args">Button</ui-button>'
  }),
  args: {
    size: 'large'
  }
}
