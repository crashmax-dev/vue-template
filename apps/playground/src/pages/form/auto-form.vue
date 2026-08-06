<template>
  <form
    class="flex flex-col gap-4"
    @submit.prevent="onSubmit"
  >
    <template
      v-for="[fieldName, field] of entries(fields)"
      :key="fieldName"
    >
      <slot
        :name="`${fieldName}_prepend`"
        :field="field"
      />

      <fieldset
        v-if="field.type === 'text'"
        class="fieldset"
      >
        <label
          class="label"
          :for="fieldName"
        >
          <span class="label-text">{{ field.label }}</span>
        </label>
        <input
          :id="fieldName"
          :name="fieldName"
          type="text"
          class="input input-bordered w-full"
          :placeholder="field.placeholder"
          :value="field.value"
        >
      </fieldset>

      <fieldset
        v-else-if="field.type === 'textarea'"
        class="fieldset"
      >
        <label
          class="label"
          :for="fieldName"
        >
          <span class="label-text">{{ field.label }}</span>
        </label>
        <textarea
          :id="fieldName"
          :name="fieldName"
          class="textarea textarea-bordered w-full"
          :placeholder="field.placeholder"
        />
      </fieldset>

      <label
        v-else-if="field.type === 'checkbox'"
        class="label cursor-pointer justify-start gap-3"
      >
        <input
          :id="fieldName"
          :ref="(el) => setCheckboxRef(fieldName, el, field.indeterminate)"
          :name="fieldName"
          type="checkbox"
          class="checkbox"
          value="on"
        >
        <span class="label-text">{{ field.label }}</span>
      </label>

      <ui-select
        v-else-if="field.type === 'select'"
        v-model="selectValues[fieldName]"
        class="w-full max-w-none"
        :name="fieldName"
        :label="field.label"
        :items="field.options"
      />

      <slot
        :name="`${fieldName}_append`"
        :field="field"
      />
    </template>

    <button
      type="submit"
      class="btn btn-primary w-fit"
    >
      Submit
    </button>
  </form>
</template>

<script setup lang="ts" generic="FieldName extends string, Field extends FormFields">
import { UiSelect } from '@vue-workspace/daisy-ui'
import { reactive } from 'vue'
import { entries } from './utils'
import type { Slot } from 'vue'
import type { FormFields, FormSlotPosition } from './types'

const props = defineProps<{
  fields: Record<FieldName, Field>
}>()

const emit = defineEmits<{
  (event: 'submit', data: Record<FieldName, unknown>): void
}>()

defineSlots<Record<`${FieldName}_${FormSlotPosition}`, Slot<{
  field: Field
}>>>()

const selectValues = reactive(
  Object.fromEntries(
    entries(props.fields)
      .filter(([, field]) => field.type === 'select')
      .map(([name, field]) => {
        const selectField = field as Extract<FormFields, { type: 'select' }>
        return [name, selectField.value ?? selectField.options[0]?.value ?? '']
      }),
  ) as Record<string, string>,
)

function setCheckboxRef(
  _fieldName: string,
  el: unknown,
  indeterminate?: boolean,
) {
  if (!(el instanceof HTMLInputElement) || !indeterminate) return
  el.indeterminate = true
}

function onSubmit(event: Event) {
  const formData = new FormData(event.target as HTMLFormElement)
  const data = Object.fromEntries(formData) as Record<FieldName, unknown>

  for (const [name, value] of Object.entries(selectValues)) {
    data[name as FieldName] = value
  }

  emit('submit', data)
}
</script>
