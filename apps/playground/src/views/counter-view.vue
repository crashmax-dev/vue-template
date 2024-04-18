<script setup lang="ts">
import { VButton, useTheme } from '@pnpm-workspace/ui'

import { useCounterStore } from '@/stores/counter.js'

const counter = useCounterStore()
const theme = useTheme()
</script>

<template>
  <div>
    <v-button size="small" variant="secondary" @click="counter.increment">
      Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
    </v-button>
    <v-button size="small" @click="theme.setTheme()">
      Toggle Theme
    </v-button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 4px;
}
</style>
