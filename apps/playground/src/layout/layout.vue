<script setup lang="ts">
import { VThemeProvider } from '@vue-workspace/ui'
import Header from './header.vue'
import Container from './section.vue'
</script>

<template>
  <VThemeProvider initial-theme="dark">
    <Header />
    <Container />
  </VThemeProvider>
</template>
