<template>
  <div class="w-full">
    <label
      v-if="label"
      class="label"
    >
      <span class="label-text">{{ label }}</span>
    </label>
    <select
      v-model="selectedValue"
      class="select select-bordered w-full"
      :name="name"
    >
      <option
        v-for="option in items"
        :key="String(option.value)"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts" generic="T extends { value: string | number, label: string }">
withDefaults(defineProps<{
  items: readonly T[]
  label?: string
  name?: string
}>(), {
  label: '',
  name: undefined,
})

const selectedValue = defineModel<T['value']>({ required: true })
</script>
