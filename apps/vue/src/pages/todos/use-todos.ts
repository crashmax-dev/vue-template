import { useQuery } from '@tanstack/vue-query'
import { getTodos } from '@vue-workspace/api'
import { defineStore, storeToRefs } from 'pinia'
import { computed } from 'vue'
import { usePagination } from './use-pagination'

export const useTodos = defineStore('todos/use-todos', () => {
  const { pageSize, pagination } = storeToRefs(usePagination())

  const {
    isFetching,
    data,
    refetch: refetchTodos,
  } = useQuery({
    queryKey: ['todos', pagination.value],
    initialData: () => ({ data: [], total: 0 }),
    queryFn: async () => {
      const { data } = await getTodos({ query: pagination.value })
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
