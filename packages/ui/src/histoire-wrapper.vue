<template>
  <div class="wrapper" :class="{ column: isColumn() }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Story, Variant } from 'histoire'

const props = defineProps<{
  story: Story
  variant?: Variant
}>()

function isColumn() {
  console.log(props.variant?.meta)
  return props.story.meta?.column || props.variant?.meta?.column
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  align-items: flex-start;

  &.column {
    flex-direction: column;
  }
}
</style>
