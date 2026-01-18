<template>
  <form @submit.prevent="onSubmit">
    <template
      v-for="[fieldName, field] of entries(fields)"
      :key="fieldName"
    >
      <slot
        :name="`${fieldName}_prepend`"
        :field="field"
      />

      <label :for="fieldName">
        {{ field.label }}

        <input
          v-if="field.type === 'text' || field.type === 'checkbox'"
          :id="fieldName"
          :name="fieldName"
          v-bind="field"
        >
        <textarea
          v-else-if="field.type === 'textarea'"
          :id="fieldName"
          :name="fieldName"
          v-bind="field"
        />
      </label>

      <slot
        :name="`${fieldName}_append`"
        :field="field"
      />
    </template>

    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script setup lang="ts" generic="FieldName extends string, Field extends FormFields">
import { entries } from './utils'
import type { Slot } from 'vue'
import type { FormFields, FormSlotPosition } from './types'

defineProps<{
  fields: Record<FieldName, Field>
}>()

const emit = defineEmits<{
  (event: 'submit', data: Record<FieldName, unknown>): void
}>()

// defineSlots<{
//   [K in `${FieldName}_${FormSlotPosition}`]: Slot<unknown>
// }>()

defineSlots<Record<`${FieldName}_${FormSlotPosition}`, Slot<{
  field: Field
}>>>()

function onSubmit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const data = Object.fromEntries(formData) as Record<FieldName, unknown>
  emit('submit', data)
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
