<template>
  <div class="w-64">
    <label class="label">
      <span class="label-text">Выберите опцию</span>
    </label>
    <select v-model="selectedValue" class="select select-bordered w-full">
      <option disabled value="">
        Пожалуйста, выберите...
      </option>
      <option
        v-for="option in items"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts" generic="T extends { value: any, label: string }">
defineProps<{
  items: T[]
}>()

const selectedValue = defineModel()
</script>
