<template>
  <Story title="Button" auto-props-disabled>
    <VButton variant="primary">
      Primary
    </VButton>
    <VButton variant="secondary">
      Secondary
    </VButton>
    <VButton variant="danger">
      Danger
    </VButton>
    <VButton variant="secondary" disabled>
      Disabled
    </VButton>
  </Story>
</template>

<script setup lang="ts">
import VButton from './button.vue'
</script>
