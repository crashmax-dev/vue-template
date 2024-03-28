import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { double } from '@pnpm-workspace/utils'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => double(count.value))

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
