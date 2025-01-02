<script setup lang="ts">
import { VButton } from '@vue-workspace/ui'
import { useCounterStore } from '../composables/use-counter.js'

const counter = useCounterStore()
</script>

<template>
  <VButton @click="counter.increment()">
    Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
  </VButton>
</template>
