import { TodoStatus } from '@vue-workspace/api/types'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, expect, it } from 'vitest'
import { useTodoFilters } from './use-todo-filters'

beforeEach(() => {
  setActivePinia(createPinia())
})

it('builds query without empty title/status', () => {
  const filters = useTodoFilters()

  expect(filters.query).toEqual({
    sortBy: 'createdAt',
    sortOrder: 'desc',
  })
})

it('includes active search filters in query', () => {
  const filters = useTodoFilters()

  filters.setFilters({
    title: '  hello  ',
    status: TodoStatus.ACTIVE,
  })

  expect(filters.query).toEqual({
    title: 'hello',
    status: TodoStatus.ACTIVE,
    sortBy: 'createdAt',
    sortOrder: 'desc',
  })
  expect(filters.hasActiveFilters).toBe(true)
})

it('toggles sort order when clicking the same column', () => {
  const filters = useTodoFilters()

  filters.setSort({ sortBy: 'title' })
  expect(filters.sortBy).toBe('title')
  expect(filters.sortOrder).toBe('asc')

  filters.setSort({ sortBy: 'title' })
  expect(filters.sortOrder).toBe('desc')
})

it('resets search filters but keeps defaults after full reset', () => {
  const filters = useTodoFilters()

  filters.setFilters({ title: 'x', status: TodoStatus.PAUSED })
  filters.setSort({ sortBy: 'status' })
  filters.resetSearchFilters()

  expect(filters.title).toBe('')
  expect(filters.status).toBeUndefined()
  expect(filters.sortBy).toBe('status')

  filters.resetFilters()
  expect(filters.sortBy).toBe('createdAt')
  expect(filters.sortOrder).toBe('desc')
})
