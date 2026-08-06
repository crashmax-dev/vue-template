import { expect, it } from 'vitest'
import { entries } from './utils'

it('returns typed object entries', () => {
  expect(entries({ a: 1, b: '2' })).toEqual([
    ['a', 1],
    ['b', '2'],
  ])
})
