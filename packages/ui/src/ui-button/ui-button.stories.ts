import UiButton from './ui-button.vue'

import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    size: {
      control: 'select',
      options: ['small', 'medium']
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
  name: 'Small',
  args: {
    size: 'small'
  }
}

export const ButtonMedium: Story = {
  ...BaseButton,
  name: 'Medium',
  args: {
    size: 'medium'
  }
}

export const PrimaryButton: Story = {
  ...BaseButton,
  name: 'Primary',
  args: {
    variant: 'primary'
  }
}

export const SecondaryButton: Story = {
  ...BaseButton,
  name: 'Secondary',
  args: {
    variant: 'secondary'
  }
}
