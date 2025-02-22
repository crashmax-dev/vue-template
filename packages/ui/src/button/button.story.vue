<template>
  <Story title="Button">
    <Variant title="Variants">
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
    </Variant>

    <Variant title="Sizes">
      <VButton
        v-for="size of sizes"
        :key="size"
        :size="size"
      >
        {{ size }}
      </VButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import VButton from './button.vue'

const sizes = ['medium', 'small'] as const
</script>
