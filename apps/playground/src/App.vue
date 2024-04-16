<script setup lang="ts">
import { UiThemeProvider } from '@pnpm-workspace/ui'
import { RouterLink, RouterView } from 'vue-router'

import { RoutePath } from '@/router'
</script>

<template>
  <ui-theme-provider>
    <header>
      <nav>
        <router-link :to="RoutePath.Home">
          Home
        </router-link>
        <router-link :to="RoutePath.Counter">
          Counter
        </router-link>
      </nav>
    </header>

    <router-view />
  </ui-theme-provider>
</template>
