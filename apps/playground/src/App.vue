<script setup lang="ts">
import { UiButton } from '@pnpm-workspace/ui'
import { add } from '@pnpm-workspace/utils'
import { computed, ref } from 'vue'

const count = ref(0)
const result = computed(() => add(count.value, 1))

function increment() {
  count.value += 1
}
</script>

<template>
  <ui-button size="large" @click="increment">Count {{ result }}</ui-button>
</template>
