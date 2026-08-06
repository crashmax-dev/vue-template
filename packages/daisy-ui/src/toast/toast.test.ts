import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import {
  __resetToastsForTests,
  dismissAllToasts,
  dismissToast,
  toast,
  useToasts,
} from './toast'

beforeEach(() => {
  vi.useFakeTimers()
  __resetToastsForTests()
})

afterEach(() => {
  __resetToastsForTests()
  vi.useRealTimers()
})

it('pushes toasts and exposes them via useToasts', () => {
  const id = toast({ message: 'hello', variant: 'success', title: 'Done' })

  expect(useToasts().value).toEqual([
    expect.objectContaining({
      id,
      message: 'hello',
      variant: 'success',
      title: 'Done',
      duration: 5000,
    }),
  ])
})

it('supports helper variants and string shorthand', () => {
  toast('plain')
  toast.info('info')
  toast.success('ok')
  toast.warning('careful')
  toast.error('boom')

  expect(useToasts().value.map((item) => [item.variant, item.message])).toEqual([
    ['info', 'plain'],
    ['info', 'info'],
    ['success', 'ok'],
    ['warning', 'careful'],
    ['error', 'boom'],
  ])
})

it('replaces toast with the same id', () => {
  toast({ id: 'same', message: 'one' })
  toast({ id: 'same', message: 'two', variant: 'error' })

  expect(useToasts().value).toHaveLength(1)
  expect(useToasts().value[0]).toMatchObject({
    id: 'same',
    message: 'two',
    variant: 'error',
  })
})

it('dismisses a single toast and all toasts', () => {
  const first = toast('one')
  const second = toast('two')

  dismissToast(first)
  expect(useToasts().value.map((item) => item.id)).toEqual([second])

  dismissAllToasts()
  expect(useToasts().value).toEqual([])
})

it('auto-dismisses after duration', () => {
  toast({ message: 'temp', duration: 1000 })
  expect(useToasts().value).toHaveLength(1)

  vi.advanceTimersByTime(999)
  expect(useToasts().value).toHaveLength(1)

  vi.advanceTimersByTime(1)
  expect(useToasts().value).toEqual([])
})

it('keeps sticky toasts when duration is null', () => {
  toast({ message: 'sticky', duration: null })
  vi.advanceTimersByTime(60_000)
  expect(useToasts().value).toHaveLength(1)
})
