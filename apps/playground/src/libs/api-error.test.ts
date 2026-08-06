import { dismissAllToasts, useToasts } from '@vue-workspace/daisy-ui'
import { beforeEach, expect, it, vi } from 'vitest'
import { reportApiError } from './api-error'

beforeEach(() => {
  vi.useFakeTimers()
  dismissAllToasts()
})

it('reports Error instances as error toasts', () => {
  reportApiError(new Error('boom'))

  expect(useToasts().value).toEqual([
    expect.objectContaining({
      title: 'API error',
      message: 'boom',
      variant: 'error',
    }),
  ])
})

it('reports string errors as error toasts', () => {
  reportApiError('offline')

  expect(useToasts().value[0]).toMatchObject({
    message: 'offline',
    variant: 'error',
  })
})

it('reports unknown errors with a fallback message', () => {
  reportApiError({ weird: true })

  expect(useToasts().value[0]?.message).toBe('Unexpected API error')
})
