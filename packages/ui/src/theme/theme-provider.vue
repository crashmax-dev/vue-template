<template>
  <slot />
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { provide, watch } from 'vue'
import { useThemeInjectionKey } from './use-theme.js'
import type { Theme } from './use-theme.js'

const props = defineProps<{
  initialTheme: Theme
}>()

const theme = useLocalStorage<Theme>('theme', props.initialTheme)

function isDark(): boolean {
  return theme.value === 'dark'
}

function toggleTheme(): void {
  theme.value = isDark() ? 'light' : 'dark'
}

watch(theme, () => {
  document.body.classList.toggle('dark', isDark())
}, { immediate: true })

provide(useThemeInjectionKey, {
  theme,
  toggleTheme,
})
</script>
