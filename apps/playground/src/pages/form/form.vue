<template>
  <div class="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto">
    <v-page-header
      title="Form"
      description="Typed auto-form demo styled with DaisyUI."
    />

    <div class="card bg-base-200 shadow-sm">
      <div class="card-body">
        <auto-form
          :fields="formFields"
          @submit="onSubmit"
        >
          <template #description_append="{ field }">
            <p class="text-base opacity-70">
              This is a description ({{ field.type }})
            </p>
          </template>

          <template #is_active_prepend>
            <div class="divider">
              Status
            </div>
          </template>
        </auto-form>
      </div>
    </div>

    <div
      v-if="lastSubmit"
      class="alert alert-success"
      data-testid="form-submit-result"
    >
      <pre class="text-base whitespace-pre-wrap">{{ lastSubmit }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VPageHeader from '@/layout/v-page-header.vue'
import AutoForm from './auto-form.vue'
import type { FormFieldsRecord } from './types'

const lastSubmit = ref('')

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
  role: {
    type: 'select',
    label: 'Role',
    value: 'editor',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ],
  },
  is_active: {
    type: 'checkbox',
    label: 'Active',
    indeterminate: true,
  },
} satisfies FormFieldsRecord

function onSubmit(data: Record<string, unknown>) {
  lastSubmit.value = JSON.stringify(data, null, 2)
  console.log(data)
}
</script>
