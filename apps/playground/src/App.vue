<script setup lang="ts">
import { VThemeProvider } from '@vue-workspace/ui'
import Container from './components/container.vue'
import Header from './components/header.vue'
</script>

<template>
  <VThemeProvider initial-theme="dark">
    <Header />
    <Container />
  </VThemeProvider>
</template>
