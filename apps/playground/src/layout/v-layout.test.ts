import { beforeAll, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import { renderComponent } from '@/test-utils'

const TestTheme = defineComponent({
  template: '<h1>Test theme</h1>',
})

beforeAll(() => {
  localStorage.removeItem('theme')
})

it('toggle theme', async () => {
  const screen = await renderComponent(TestTheme)
  const button = screen.getByTestId('toggle-theme')

  function getTheme() {
    return document.body.classList.contains('dark') ? 'dark' : 'light'
  }

  expect(getTheme()).toBe('dark')
  await expect.element(button).toBeVisible()
  await button.click()
  expect(getTheme()).toBe('light')
})
