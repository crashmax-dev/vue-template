<script setup lang="ts">
import { RoutePath } from '@/router'
import { useTheme, VButton } from '@vue-workspace/ui'
import MoonIcon from '~icons/heroicons-outline/moon'
import SunIcon from '~icons/heroicons-outline/sun'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const theme = useTheme()
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <VButton
        v-for="[name, path] of Object.entries(RoutePath)"
        :key="path"
        class="header-link"
        :as="RouterLink"
        :to="path"
        :variant="route.path === path ? 'primary' : 'secondary'"
      >
        {{ name }}
      </VButton>

      <VButton
        as="a"
        variant="secondary"
        href="/histoire"
        target="_blank"
      >
        Histoire
      </VButton>

      <VButton
        class="toggle-theme"
        @click="theme.setTheme()"
      >
        <MoonIcon v-if="theme.theme.value === 'dark'" class="icon" />
        <SunIcon v-else class="icon" />
      </VButton>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 8px;
  background-color: hsl(var(--primary-foreground));
  border-bottom: 1px solid hsl(var(--border));

  &-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    height: 100%;
    align-items: center;
  }

  &-link {
    text-decoration: none;
  }
}

.toggle-theme {
  --button-padding: 0.625rem;
  margin-left: auto;
}
</style>
