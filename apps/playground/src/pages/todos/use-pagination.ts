import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import type { GetTodosData } from '@vue-workspace/api/types'

export const usePagination = defineStore('todos/use-pagination', () => {
  const pageSize = ref(10)
  const paginationInitial = computed(() => ({ start: 0, limit: pageSize.value }))
  const pagination = shallowRef<GetTodosData['query']>({ ...paginationInitial.value })

  function updatePagination(params: { target: 'prev' | 'next', total: number }) {
    if (params.target === 'prev' && pagination.value.start === 0) return
    if (params.target === 'next' && pagination.value.start + pageSize.value >= params.total) return

    pagination.value = {
      ...pagination.value,
      start: params.target === 'prev'
        ? pagination.value.start - pageSize.value
        : pagination.value.start + pageSize.value,
    }
  }

  function resetPagination() {
    pagination.value = { ...paginationInitial.value }
  }

  return {
    pageSize,
    pagination,
    resetPagination,
    updatePagination,
  }
})
