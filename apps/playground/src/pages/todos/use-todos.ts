import { useQuery } from '@tanstack/vue-query'
import { getTodos } from '@vue-workspace/api'
import { defineStore, storeToRefs } from 'pinia'
import { computed, watch } from 'vue'
import { usePagination } from './use-pagination'
import { useTodoFilters } from './use-todo-filters'

export const useTodos = defineStore('todos/use-todos', () => {
  const paginationStore = usePagination()
  const filtersStore = useTodoFilters()
  const { pageSize, pagination } = storeToRefs(paginationStore)
  const { query: filters } = storeToRefs(filtersStore)

  watch(filters, () => {
    paginationStore.resetPagination()
  }, { deep: true })

  const {
    isFetching,
    data,
    refetch: refetchTodos,
  } = useQuery({
    queryKey: ['todos', pagination, filters],
    initialData: () => ({ data: [], total: 0 }),
    queryFn: async () => {
      const { data } = await getTodos({
        query: {
          ...pagination.value,
          ...filters.value,
        },
      })
      return data
    },
  })

  const isPagePrevDisabled = computed(() => {
    return pagination.value.start === 0 || isFetching.value
  })

  const isPageNextDisabled = computed(() => {
    return pagination.value.start + pageSize.value >= data.value.total || isFetching.value
  })

  return {
    isFetching,
    data,
    isPagePrevDisabled,
    isPageNextDisabled,
    refetchTodos,
  }
})
