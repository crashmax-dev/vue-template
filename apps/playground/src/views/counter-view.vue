<script setup lang="ts">
import { UiButton } from '@pnpm-workspace/ui'
import { useCounterStore } from '@/stores/counter.js'

const counter = useCounterStore()
</script>

<template>
  <ui-button size="small" @click="counter.increment">
    Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
  </ui-button>
</template>
