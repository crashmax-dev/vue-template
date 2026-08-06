import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePagination = defineStore('todos/use-pagination', () => {
  const pageSize = ref(10)
  const start = ref(0)

  const pagination = computed(() => ({
    start: start.value,
    limit: pageSize.value,
  }))

  function updatePagination(params: { target: 'prev' | 'next', total: number }) {
    if (params.target === 'prev' && start.value === 0) return
    if (params.target === 'next' && start.value + pageSize.value >= params.total) return

    start.value = params.target === 'prev'
      ? start.value - pageSize.value
      : start.value + pageSize.value
  }

  function resetPagination() {
    start.value = 0
  }

  return {
    pageSize,
    start,
    pagination,
    resetPagination,
    updatePagination,
  }
})
