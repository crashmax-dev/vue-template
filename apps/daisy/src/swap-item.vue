<template>
  <label
    class="swap swap-flip text-7xl"
    :class="{ 'swap-active': isOpen }"
  >
    <input
      v-model="isOpen"
      :disabled="isDisabled"
      type="checkbox"
    >
    <div class="swap-on text-center">{{ emoji }}</div>
    <div class="swap-off text-center">❓</div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  emoji: string
  disabled: boolean
}>()

const isOpen = defineModel<boolean>('isOpen')

const isDisabled = computed(() => {
  return props.disabled || isOpen.value
})
</script>
