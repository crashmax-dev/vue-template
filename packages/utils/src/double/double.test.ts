import { expect, it } from 'vitest'
import { double } from './double.js'

it('expect 2 * 2 = 4', () => {
  expect(double(2)).toBe(4)
})
