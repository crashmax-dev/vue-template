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

const buttonTemplate = '<ui-button v-bind="args">Button</ui-button>'

const BaseButton: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: buttonTemplate
  })
}

export const SmallButton: Story = {
  ...BaseButton,
  args: {
    size: 'small'
  }
}

export const ButtonLarge: Story = {
  ...BaseButton,
  args: {
    size: 'large'
  }
}
