<template>
  <div class="min-w-0">
    <h1 class="text-2xl font-bold truncate">
      {{ title }}
    </h1>
    <p
      v-if="$slots.default || description"
      class="text-base opacity-70 mt-1"
    >
      <slot>{{ description }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
}>(), {
  description: undefined,
})
</script>
