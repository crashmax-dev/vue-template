import VButton from './button.vue'

import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof VButton> = {
  component: VButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'destructive']
    },
    size: {
      control: 'select',
      options: ['small', 'medium']
    }
  }
}

export default meta

type Story = StoryObj<typeof VButton>

const buttonTemplate = '<v-button v-bind="args">Button</v-button>'

const BaseButton: Story = {
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: buttonTemplate
  })
}

export const Buttons: Story = {
  name: 'All',
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 8px;">
        <v-button variant="primary">Button</v-button>
        <v-button variant="secondary">Button</v-button>
        <v-button variant="outline">Button</v-button>
        <v-button variant="destructive">Button</v-button>
      </div>
    `
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

export const OutlineButton: Story = {
  ...BaseButton,
  name: 'Outline',
  args: {
    variant: 'outline'
  }
}

export const DestructiveButton: Story = {
  ...BaseButton,
  name: 'Destructive',
  args: {
    variant: 'destructive'
  }
}
