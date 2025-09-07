<template>
  <AutoForm :fields="formFields" @submit="console.log">
    <template #description_append="{ field }">
      <span>This is a description ({{ field.type }})</span>
    </template>

    <template #is_active_prepend>
      <hr>
    </template>
  </AutoForm>
</template>

<script setup lang="ts">
import AutoForm from './auto-form.vue'
import type { FormFieldsRecord } from './types'

const formFields = {
  name: {
    type: 'text',
    label: 'Name',
    value: 'John Doe',
  },
  description: {
    type: 'textarea',
    label: 'Description',
    placeholder: 'Write a description',
  },
  is_active: {
    type: 'checkbox',
    label: 'Active',
    indeterminate: true,
  },
} satisfies FormFieldsRecord
</script>
