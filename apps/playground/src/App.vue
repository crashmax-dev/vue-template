<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { RoutePath } from '@/router'
</script>

<template>
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
</template>
