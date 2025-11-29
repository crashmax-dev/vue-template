<template>
  <Story title="Button">
    <Variant title="Variants">
      <v-button variant="primary">
        Primary
      </v-button>
      <v-button variant="secondary">
        Secondary
      </v-button>
      <v-button variant="danger">
        Danger
      </v-button>
      <v-button
        variant="secondary"
        disabled
      >
        Disabled
      </v-button>
    </Variant>

    <Variant title="Sizes">
      <v-button
        v-for="size of sizes"
        :key="size"
        :size="size"
      >
        {{ size }}
      </v-button>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import VButton from '../button.vue'

const sizes = ['medium', 'small'] as const
</script>
