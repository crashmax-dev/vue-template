import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, expect, it } from 'vitest'
import { usePagination } from './use-pagination'

beforeEach(() => {
  setActivePinia(createPinia())
})

it('starts at the first page', () => {
  const pagination = usePagination()

  expect(pagination.pagination).toEqual({ start: 0, limit: 10 })
})

it('moves to the next and previous page within bounds', () => {
  const pagination = usePagination()

  pagination.updatePagination({ target: 'next', total: 25 })
  expect(pagination.pagination.start).toBe(10)

  pagination.updatePagination({ target: 'next', total: 25 })
  expect(pagination.pagination.start).toBe(20)

  pagination.updatePagination({ target: 'next', total: 25 })
  expect(pagination.pagination.start).toBe(20)

  pagination.updatePagination({ target: 'prev', total: 25 })
  expect(pagination.pagination.start).toBe(10)
})

it('resets pagination to the first page', () => {
  const pagination = usePagination()

  pagination.updatePagination({ target: 'next', total: 25 })
  pagination.resetPagination()

  expect(pagination.pagination).toEqual({ start: 0, limit: 10 })
})
