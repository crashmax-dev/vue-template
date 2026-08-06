<template>
  <dialog
    ref="dialogRef"
    class="modal"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        Edit todo
      </h3>

      <form
        v-if="todo"
        class="mt-4 flex flex-col gap-4"
        @submit.prevent="onSubmit"
      >
        <todo-form :todo="todo" />

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
            Save
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
import { updateTodoById } from '@vue-workspace/api'
import { ref, useTemplateRef } from 'vue'
import TodoForm from './todo-form.vue'
import { useTodos } from './use-todos'
import type { Todo, TodoWritable } from '@vue-workspace/api/types'

const emit = defineEmits<{
  updated: []
}>()

const dialogRef = useTemplateRef('dialogRef')
const todos = useTodos()
const todo = ref<Todo | null>(null)
const isSubmitting = ref(false)

function open(next: Todo) {
  todo.value = { ...next }
  dialogRef.value?.showModal()
}

function close() {
  dialogRef.value?.close()
  todo.value = null
}

async function onSubmit(event: Event) {
  if (!todo.value) return

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const body = Object.fromEntries(formData) as TodoWritable
  if (!body.title?.trim()) return

  isSubmitting.value = true
  try {
    await updateTodoById({
      path: { uuid: todo.value.uuid },
      body,
    })
    await todos.refetchTodos()
    emit('updated')
    close()
  } finally {
    isSubmitting.value = false
  }
}

defineExpose({ open, close })
</script>
