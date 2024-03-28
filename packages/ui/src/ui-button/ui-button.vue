<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size: 'small' | 'large'
}>()

const buttonSize = computed(() => props.size === 'small' ? '0.5rem' : '1rem')
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  background: hsl(var(--primary));
  border-radius: 6px;
  color: hsl(var(--primary-foreground));
  padding: v-bind(buttonSize);
  border: none;

  transition-property: background;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s
}

button:hover {
  background: hsl(var(--primary) / .9);
}
</style>
