<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import type { Theme, UseTheme } from '../composables/use-theme.js'

const props = withDefaults(defineProps<{
  theme: Theme
}>(), {
  theme: 'light'
})

const theme = ref<Theme>(props.theme)
watch(() => props.theme, toggleTheme)

function toggleTheme() {
  const isDark = theme.value === 'dark'
  document.documentElement.classList.toggle('dark', isDark)
}

onMounted(() => {
  toggleTheme()
})

provide<UseTheme>('ui-theme', {
  theme,
  toggleTheme
})
</script>

<template>
  <slot />
</template>
