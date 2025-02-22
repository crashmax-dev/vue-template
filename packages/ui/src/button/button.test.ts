import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import Button from './button.vue'

it('should render a button', () => {
  const wrapper = mount(Button, {
    props: {
      variant: 'danger',
      size: 'small',
    },
    slots: {
      default: 'Hello',
    },
  })

  expect(wrapper.text()).toBe('Hello')
  expect(wrapper.classes()).toContain('size-small')
  expect(wrapper.classes()).toContain('variant-danger')
})
