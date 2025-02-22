<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { provide, watch } from 'vue'
import { useThemeInjectionKey } from '../composables/use-theme.js'
import type { Theme } from '../composables/use-theme.js'

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
  setTheme,
})
</script>

<template>
  <slot />
</template>

<style>
* {
  border-color: hsl(var(--border))
}

html {
  -webkit-text-size-adjust: 100%;
  font-variation-settings: normal
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis-weight: none;
  text-rendering: optimizeLegibility
}
</style>
