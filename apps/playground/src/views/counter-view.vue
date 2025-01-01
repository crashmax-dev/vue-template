<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.js'
import { VButton } from '@vue-workspace/ui'

const counter = useCounterStore()
</script>

<template>
  <div class="counter">
    <VButton @click="counter.increment">
      Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
    </VButton>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  gap: 4px;
}
</style>
