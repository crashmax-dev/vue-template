import { describe, expect, it } from 'vitest'
import { useCounterStore } from './use-counter'

describe('use-counter', () => {
  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('increments by amount', () => {
    const counter = useCounterStore()
    counter.increment(10)
    expect(counter.count).toBe(10)
  })
})
