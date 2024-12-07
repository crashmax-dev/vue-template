<template>
  <Story
    title="Button"
    auto-props-disabled
    :layout="{ type: 'grid', width: 600 }"
  >
    <div style="display: flex; gap: 8px;">
      <VButton variant="primary">Primary</VButton>
      <VButton variant="secondary">Secondary</VButton>
      <VButton variant="outline">Outline</VButton>
      <VButton variant="danger">Danger</VButton>
      <VButton variant="secondary" disabled>Disabled</VButton>
    </div>
  </Story>
</template>

<script setup lang="ts">
import VButton from './button.vue';
</script>
