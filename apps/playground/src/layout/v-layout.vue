<template>
  <v-theme-provider
    v-if="isRouterReady"
    initial-theme="dark"
  >
    <v-drawer>
      <template #navbar="{ open, toggle }">
        <v-header
          :open="open"
          :toggle="toggle"
        />
      </template>

      <template #sidebar="{ close }">
        <v-sidebar-nav :close="close" />
      </template>

      <v-section />
    </v-drawer>

    <ui-toaster placement="top-end" />
  </v-theme-provider>
</template>

<script setup lang="ts">
import { UiToaster } from '@vue-workspace/daisy-ui'
import { VThemeProvider } from '@vue-workspace/ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VDrawer from './v-drawer.vue'
import VHeader from './v-header.vue'
import VSection from './v-section.vue'
import VSidebarNav from './v-sidebar-nav.vue'

const isRouterReady = ref(false)
const router = useRouter()
router.isReady().finally(() => isRouterReady.value = true)
</script>
