<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue'

import { type Theme, uiThemeInjectionKey } from '../composables/use-theme.js'

const props = withDefaults(defineProps<{
  /**
   * @default 'light'
   */
  theme?: Theme
}>(), {
  theme: 'light'
})

const theme = ref<Theme>(props.theme)
const isDark = computed(() => theme.value === 'dark')
watch(() => props.theme, toggleDarkTheme)

function toggleTheme() {
  theme.value = isDark.value ? 'light' : 'dark'
  toggleDarkTheme()
}

function toggleDarkTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  toggleTheme()
})

provide(uiThemeInjectionKey, {
  theme,
  toggleTheme
})
</script>

<template>
  <slot />
</template>
