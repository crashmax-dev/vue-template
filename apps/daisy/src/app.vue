<template>
  <ui-select
    v-model="item"
    :items="Array.from({ length: 12 }, (_, i) => ({
      value: i + 1,
      label: `Item ${i + 1}`,
    }))"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import UiSelect from './ui-select.vue'

const item = ref(4)
watch(item, () => {
  console.log(item.value)
})
</script>
