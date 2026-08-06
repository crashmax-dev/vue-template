import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { GetTodosData, TodoStatus } from '@vue-workspace/api/types'

export type TodoSortBy = NonNullable<GetTodosData['query']['sortBy']>
export type TodoSortOrder = NonNullable<GetTodosData['query']['sortOrder']>

const defaultFilters = {
  title: '',
  status: undefined as TodoStatus | undefined,
  sortBy: 'createdAt' as TodoSortBy,
  sortOrder: 'desc' as TodoSortOrder,
}

export const useTodoFilters = defineStore('todos/use-todo-filters', () => {
  const title = ref(defaultFilters.title)
  const status = ref<TodoStatus | undefined>(defaultFilters.status)
  const sortBy = ref<TodoSortBy>(defaultFilters.sortBy)
  const sortOrder = ref<TodoSortOrder>(defaultFilters.sortOrder)

  const query = computed(() => {
    const result: Pick<GetTodosData['query'], 'title' | 'status' | 'sortBy' | 'sortOrder'> = {
      sortBy: sortBy.value,
      sortOrder: sortOrder.value,
    }

    const trimmedTitle = title.value.trim()
    if (trimmedTitle) {
      result.title = trimmedTitle
    }
    if (status.value) {
      result.status = status.value
    }

    return result
  })

  const hasActiveFilters = computed(() => {
    return Boolean(title.value.trim() || status.value)
  })

  function setFilters(next: { title?: string, status?: TodoStatus | undefined }) {
    if (next.title !== undefined) {
      title.value = next.title
    }
    if ('status' in next) {
      status.value = next.status
    }
  }

  function setSort(next: { sortBy: TodoSortBy, sortOrder?: TodoSortOrder }) {
    if (sortBy.value === next.sortBy) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      return
    }

    sortBy.value = next.sortBy
    sortOrder.value = next.sortOrder ?? 'asc'
  }

  function resetFilters() {
    title.value = defaultFilters.title
    status.value = defaultFilters.status
    sortBy.value = defaultFilters.sortBy
    sortOrder.value = defaultFilters.sortOrder
  }

  function resetSearchFilters() {
    title.value = defaultFilters.title
    status.value = defaultFilters.status
  }

  return {
    title,
    status,
    sortBy,
    sortOrder,
    query,
    hasActiveFilters,
    setFilters,
    setSort,
    resetFilters,
    resetSearchFilters,
  }
})
