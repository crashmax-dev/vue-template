<template>
  <header class="w-full shrink-0 border-b border-base-300 bg-base-300">
    <div class="flex min-h-16 items-center gap-2 px-4 sm:px-6">
      <div class="app-nav-burger">
        <button
          type="button"
          class="btn btn-square btn-ghost"
          aria-label="Open navigation"
          aria-controls="app-drawer-sidebar"
          :aria-expanded="open"
          data-testid="nav-burger"
          @click="toggle"
        >
          <menu-icon class="size-6" />
        </button>
      </div>

      <div class="flex-1 font-semibold">
        Playground
      </div>

      <button
        type="button"
        class="btn btn-square btn-ghost"
        data-testid="toggle-theme"
        aria-label="Toggle theme"
        @click="theme.toggleTheme"
      >
        <moon-icon
          v-if="theme.theme.value === 'dark'"
          class="size-5"
        />
        <sun-icon
          v-else
          class="size-5"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@vue-workspace/ui'
import MenuIcon from '~icons/heroicons-outline/menu'
import MoonIcon from '~icons/heroicons-outline/moon'
import SunIcon from '~icons/heroicons-outline/sun'

defineProps<{
  open: boolean
  toggle: () => void
}>()

const theme = useTheme()
</script>
