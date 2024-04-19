import VButton from './button.vue'

import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof VButton> = {
  component: VButton,
  parameters: {
    actions: { disable: true }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'danger']
    },
    size: {
      control: 'select',
      options: ['small', 'medium']
    },
    disabled: {
      control: 'boolean',
      default: false
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
        <v-button variant="primary">Primary</v-button>
        <v-button variant="secondary">Secondary</v-button>
        <v-button variant="outline">Outline</v-button>
        <v-button variant="danger">Danger</v-button>
        <v-button variant="secondary" disabled>Disabled</v-button>
      </div>
    `
  })
}

export const SizesButton: Story = {
  name: 'Sizes',
  render: (args) => ({
    components: { VButton },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 8px; flex-direction: column;">
        <v-button size="small">Button</v-button>
        <v-button size="medium">Button</v-button>
      </div>
    `
  })
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

export const DangerButton: Story = {
  ...BaseButton,
  name: 'Danger',
  args: {
    variant: 'danger'
  }
}

export const DisabledButton: Story = {
  ...BaseButton,
  name: 'Disabled',
  args: {
    variant: 'secondary',
    disabled: true
  }
}
