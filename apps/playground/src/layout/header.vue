<script setup lang="ts">
import { RoutePath } from '@/libs/router'
import { useTheme, VButton } from '@vue-workspace/ui'
import ExternalLinkIcon from '~icons/heroicons-outline/external-link'
import MoonIcon from '~icons/heroicons-outline/moon'
import SunIcon from '~icons/heroicons-outline/sun'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const theme = useTheme()

function histoireUrl() {
  if (import.meta.env.DEV) return 'http://localhost:6006'
  return '/vue-template/histoire'
}
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
        :href="histoireUrl()"
        target="_blank"
        class="header-link header-link__with-icon"
      >
        <ExternalLinkIcon />
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
  padding: 8px 16px;
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

    &__with-icon {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}

.toggle-theme {
  --button-padding: 0.625rem;
  margin-left: auto;
}
</style>
