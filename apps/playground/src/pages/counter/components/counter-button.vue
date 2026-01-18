<template>
  <v-button @click="counter.increment()">
    Count {{ counter.count }} * 2 = {{ counter.doubleCount }}
  </v-button>
</template>

<script setup lang="ts">
import { VButton } from '@vue-workspace/ui'
import { useCounterStore } from '../composables/use-counter.js'

const counter = useCounterStore()
</script>
