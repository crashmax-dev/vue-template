import { beforeAll, expect, it } from 'vitest'
import { page } from 'vitest/browser'
import { defineComponent } from 'vue'
import { renderComponent } from '@/test/render-component'

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
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  }

  expect(getTheme()).toBe('dark')
  expect(document.body.classList.contains('dark')).toBe(true)
  await expect.element(button).toBeVisible()
  await button.click()
  expect(getTheme()).toBe('light')
  expect(document.body.classList.contains('dark')).toBe(false)
})

it('renders a desktop sidebar landmark', async () => {
  const screen = await renderComponent(TestTheme)
  await expect.element(screen.getByRole('navigation', { name: 'Navigation' })).toBeInTheDocument()
})

it('opens navigation drawer from burger on mobile', async () => {
  await page.viewport(390, 844)
  const screen = await renderComponent(TestTheme)
  const burger = screen.getByTestId('nav-burger')

  await expect.element(burger).toBeVisible()
  expect(burger.element().getAttribute('aria-expanded')).toBe('false')

  await burger.click()
  expect(burger.element().getAttribute('aria-expanded')).toBe('true')
  await expect.element(screen.getByTestId('drawer-mobile')).toBeVisible()
  await expect.element(screen.getByRole('dialog', { name: 'Navigation' })).toBeVisible()
})
