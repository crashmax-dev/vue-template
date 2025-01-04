<script setup lang="ts">
import { VThemeProvider } from '@vue-workspace/ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from './header.vue'
import Section from './section.vue'

const isRouterReady = ref(false)
const router = useRouter()
router.isReady().finally(() => isRouterReady.value = true)
</script>

<template>
  <VThemeProvider v-if="isRouterReady" initial-theme="dark">
    <Header />
    <Section />
  </VThemeProvider>
</template>
