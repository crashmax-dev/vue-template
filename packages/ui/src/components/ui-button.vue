<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  size: 'small' | 'large'
}>()

const buttonSize = computed(() => (props.size === 'small' ? '0.5rem' : '1rem'))
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  background: #333;
  border-radius: 6px;
  color: #fff;
  border: none;
  padding: v-bind(buttonSize);
  transition: background 0.3s;
}

button:hover {
  background: #444;
}
</style>
