<template>
  <div
    class="wrapper"
    :class="{ column: isColumn() }"
  >
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

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;

  &.column {
    flex-direction: column;
  }
}
</style>
