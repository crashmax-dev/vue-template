<template>
  <input
    v-model="value"
    placeholder="Type text..."
    :readonly="readonly"
    @update:model-value="provide?.(value, prevValue)"
  >
</template>

<script setup lang="ts" generic="T extends any">
// Fixed https://github.com/vuejs/language-tools/pull/5790

type ProvideFn<T> = (value: T, prevValue?: T) => void

defineProps<{
  readonly?: boolean
  provide?: ProvideFn<T>
}>()

const value = defineModel<T>({ required: true })
const prevValue = usePrevious(value)
</script>
