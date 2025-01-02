import { double } from '@vue-workspace/utils'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('composables/use-counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => double(count.value))

  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
