import { expect, it } from 'vitest'
import { renderComponent } from '@/test-utils'
import CounterButton from './counter-button.vue'

it('counter button increments the count', async () => {
  const screen = await renderComponent(CounterButton)
  const button = screen.getByTestId('counter')

  await expect.element(button).toBeVisible()
  await button.click()
  await expect.element(button).toHaveTextContent('Count 1 * 2 = 2')

  await button.tripleClick()
  await expect.element(button).toHaveTextContent('Count 4 * 2 = 8')
})
