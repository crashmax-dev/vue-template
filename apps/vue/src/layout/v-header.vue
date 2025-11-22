<template>
  <header class="header">
    <nav class="header-nav">
      <v-button
        v-for="[name, path] of Object.entries(RoutePath)"
        :key="path"
        class="header-link"
        :as="RouterLink"
        :to="path"
        :variant="route.path === path ? 'primary' : 'secondary'"
      >
        {{ name }}
      </v-button>

      <v-button
        as="a"
        variant="secondary"
        :href="histoireUrl()"
        target="_blank"
        class="header-link header-link__with-icon"
      >
        <external-link-icon />
        Histoire
      </v-button>

      <v-button
        class="toggle-theme"
        @click="theme.toggleTheme"
      >
        <moon-icon v-if="theme.theme.value === 'dark'" class="text-xl" />
        <sun-icon v-else class="text-xl" />
      </v-button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useTheme, VButton } from '@vue-workspace/ui'
import { RouterLink, useRoute } from 'vue-router'
import ExternalLinkIcon from '~icons/heroicons-outline/external-link'
import MoonIcon from '~icons/heroicons-outline/moon'
import SunIcon from '~icons/heroicons-outline/sun'
import { RoutePath } from '@/libs/router'

const route = useRoute()
const theme = useTheme()

function histoireUrl() {
  if (import.meta.env.DEV) return 'http://localhost:6006'
  return '/vue-template/histoire'
}
</script>

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
