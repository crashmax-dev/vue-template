<template>
  <input
    v-model="value"
    placeholder="Type text..."
    @update:model-value="provide(prevValue, value)"
  >
</template>

<script setup lang="ts" generic="T extends unknown">
type ProvideFn<T> = (prevValue: T, value: T) => void

defineProps<{
  provide?: ProvideFn<T>
}>()

const value = defineModel<T>({ required: true })
const prevValue = usePrevious(value)
</script>
