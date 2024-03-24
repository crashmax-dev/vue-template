<script setup lang="ts">
import { UiButton } from '@pnpm-workspace/ui'
import { divide } from '@pnpm-workspace/utils'
import { computed, ref } from 'vue'

const count = ref(2)
const result = computed(() => divide(count.value, 2))

function increment() {
  count.value += 2
}
</script>

<template>
  <ui-button size="large" @click="increment">Count {{ result }}</ui-button>
</template>
