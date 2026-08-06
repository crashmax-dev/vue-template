<template>
  <dialog
    ref="dialogRef"
    class="modal"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        Create todo
      </h3>

      <form
        class="mt-4 flex flex-col gap-4"
        @submit.prevent="onSubmit"
      >
        <todo-form />

        <div class="modal-action">
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
            :disabled="isSubmitting"
          >
            Create
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
import { postTodos } from '@vue-workspace/api'
import { ref, useTemplateRef } from 'vue'
import TodoForm from './todo-form.vue'
import { useTodos } from './use-todos'
import type { TodoWritable } from '@vue-workspace/api/types'

const emit = defineEmits<{
  created: []
}>()

const dialogRef = useTemplateRef('dialogRef')
const todos = useTodos()
const isSubmitting = ref(false)

function open() {
  dialogRef.value?.showModal()
}

function close() {
  dialogRef.value?.close()
}

async function onSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const todo = Object.fromEntries(formData) as TodoWritable
  if (!todo.title?.trim()) return

  isSubmitting.value = true
  try {
    await postTodos({ body: todo })
    form.reset()
    await todos.refetchTodos()
    emit('created')
    close()
  } finally {
    isSubmitting.value = false
  }
}

defineExpose({ open, close })
</script>
