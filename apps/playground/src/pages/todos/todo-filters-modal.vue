<template>
  <dialog
    ref="dialogRef"
    class="modal"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        Filters
      </h3>

      <form
        class="mt-4 flex flex-col gap-4"
        @submit.prevent="onApply"
      >
        <fieldset class="fieldset">
          <label class="label">
            <span class="label-text">Title contains</span>
          </label>
          <input
            v-model="draftTitle"
            type="text"
            class="input input-bordered w-full"
            placeholder="Search title"
          >
        </fieldset>

        <fieldset class="fieldset">
          <label class="label">
            <span class="label-text">Status</span>
          </label>
          <select
            v-model="draftStatus"
            class="select select-bordered w-full"
          >
            <option value="">
              All
            </option>
            <option
              v-for="status of Object.values(TodoStatus)"
              :key="status"
              :value="status"
            >
              {{ status }}
            </option>
          </select>
        </fieldset>

        <div class="modal-action">
          <button
            type="button"
            class="btn btn-ghost"
            @click="onReset"
          >
            Reset
          </button>
          <button
            type="button"
            class="btn"
            @click="close"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
    <form
      method="dialog"
      class="modal-backdrop"
    >
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { TodoStatus } from '@vue-workspace/api/types'
import { ref, useTemplateRef } from 'vue'
import { useTodoFilters } from './use-todo-filters'
import type { TodoStatus as TodoStatusType } from '@vue-workspace/api/types'

const dialogRef = useTemplateRef('dialogRef')
const filters = useTodoFilters()

const draftTitle = ref('')
const draftStatus = ref<TodoStatusType | ''>('')

function open() {
  draftTitle.value = filters.title
  draftStatus.value = filters.status ?? ''
  dialogRef.value?.showModal()
}

function close() {
  dialogRef.value?.close()
}

function onApply() {
  filters.setFilters({
    title: draftTitle.value,
    status: draftStatus.value || undefined,
  })
  close()
}

function onReset() {
  draftTitle.value = ''
  draftStatus.value = ''
  filters.resetSearchFilters()
  close()
}

defineExpose({ open, close })
</script>
