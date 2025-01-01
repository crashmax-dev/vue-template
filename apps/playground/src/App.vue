<script setup lang="ts">
import { VThemeProvider } from '@vue-workspace/ui'
import { RouterView } from 'vue-router'
import Header from './components/header.vue'
</script>

<template>
  <VThemeProvider initial-theme="dark">
    <Header />
    <div class="container">
      <RouterView />
    </div>
  </VThemeProvider>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
