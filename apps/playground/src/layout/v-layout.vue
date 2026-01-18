<template>
  <v-theme-provider
    v-if="isRouterReady"
    initial-theme="dark"
  >
    <v-header />
    <v-section />
  </v-theme-provider>
</template>

<script setup lang="ts">
import { VThemeProvider } from '@vue-workspace/ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VHeader from './v-header.vue'
import VSection from './v-section.vue'

const isRouterReady = ref(false)
const router = useRouter()
router.isReady().finally(() => isRouterReady.value = true)
</script>
