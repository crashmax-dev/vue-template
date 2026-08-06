<template>
  <ul class="menu p-4 w-full gap-1">
    <li
      v-for="[name, path] of Object.entries(RoutePath)"
      :key="path"
    >
      <router-link
        :to="path"
        :class="{ active: route.path === path }"
        @click="close"
      >
        {{ name }}
      </router-link>
    </li>

    <li>
      <a
        :href="histoireUrl()"
        target="_blank"
        rel="noreferrer"
        @click="close"
      >
        <external-link-icon class="size-4" />
        Histoire
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ExternalLinkIcon from '~icons/heroicons-outline/external-link'
import { RoutePath } from '@/libs/router'

defineProps<{
  close: () => void
}>()

const route = useRoute()

function histoireUrl() {
  if (import.meta.env.DEV) return 'http://localhost:6006'
  return '/vue-template/histoire'
}
</script>
