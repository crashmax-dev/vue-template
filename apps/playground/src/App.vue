<script setup lang="ts">
import { VThemeProvider } from '@pnpm-workspace/ui'
import { RouterLink, RouterView } from 'vue-router'

import { RoutePath } from '@/router'
</script>

<template>
  <VThemeProvider initial-theme="dark">
    <header>
      <nav>
        <RouterLink :to="RoutePath.Home">
          Home
        </RouterLink>
        <RouterLink :to="RoutePath.Counter">
          Counter
        </RouterLink>
      </nav>
    </header>

    <RouterView />
  </VThemeProvider>
</template>
