<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { provide, watch } from 'vue'

import { type Theme, useThemeInjectionKey } from '../composables/use-theme.js'

const props = withDefaults(defineProps<{
  theme: Theme
  force?: boolean
}>(), {
  force: false
})

const currentTheme = useLocalStorage<Theme>('theme', props.theme)

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
  if (props.force) {
    setTheme(props.theme)
  }

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
