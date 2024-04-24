<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { provide, watch } from 'vue'

import { type Theme, useThemeInjectionKey } from '../composables/use-theme.js'

const props = defineProps<{
  initialTheme: Theme
}>()

const currentTheme = useLocalStorage<Theme>('theme', props.initialTheme)

function isDark(): boolean {
  return currentTheme.value === 'dark'
}

function setTheme(themeValue?: Theme): void {
  currentTheme.value = themeValue ?? (isDark() ? 'light' : 'dark')
}

function applyTheme(): void {
  document.body.classList.toggle('dark', isDark())
}

watch(currentTheme, () => {
  applyTheme()
}, { immediate: true })

provide(useThemeInjectionKey, {
  theme: currentTheme,
  setTheme
})
</script>

<template>
  <slot />
</template>
