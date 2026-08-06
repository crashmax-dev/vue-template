<template>
  <div class="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto">
    <v-page-header
      title="Counter"
      description="Pinia store demo with shared utils."
    />
    <counter-button />
  </div>
</template>

<script setup lang="ts">
import VPageHeader from '@/layout/v-page-header.vue'
import CounterButton from './components/counter-button.vue'
</script>
