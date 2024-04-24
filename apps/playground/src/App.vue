<script setup lang="ts">
import { VThemeProvider } from '@pnpm-workspace/ui'
import { RouterLink, RouterView } from 'vue-router'

import { RoutePath } from '@/router'
</script>

<template>
  <v-theme-provider initial-theme="dark">
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
  </v-theme-provider>
</template>
