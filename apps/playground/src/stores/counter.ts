import { double } from '@pnpm-workspace/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => double(count.value))

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
