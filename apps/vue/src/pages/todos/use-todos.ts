import { useQuery } from '@tanstack/vue-query'
import { getTodos } from '@vue-workspace/api'
import type { PaginationContext } from './use-pagination'

export function useTodos(pagination: PaginationContext) {
  const {
    isFetching,
    data: todos,
    refetch: refetchTodos,
  } = useQuery({
    queryKey: ['todos', pagination],
    initialData: () => ({ data: [], total: 0 }),
    queryFn: async () => {
      const { data } = await getTodos({ query: pagination.value })
      return data
    },
  })

  return {
    isFetching,
    todos,
    refetchTodos,
  }
}
