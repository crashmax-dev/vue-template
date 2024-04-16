<script setup lang="ts">
import { UiButton } from '@pnpm-workspace/ui'
import { useTheme } from '@pnpm-workspace/ui/composables'

import { useCounterStore } from '@/stores/counter.js'

const counter = useCounterStore()
const theme = useTheme()
</script>

<template>
  <div>
    <ui-button size="small" @click="counter.increment">
      Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
    </ui-button>
    <ui-button size="small" @click="theme.toggleTheme">
      Toggle Theme
    </ui-button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 4px;
}
</style>
