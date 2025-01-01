import { double } from '@vue-workspace/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { Ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) as Ref
  const doubleCount = computed(() => double(count.value))

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
