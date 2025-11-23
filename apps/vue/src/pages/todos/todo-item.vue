<template>
  <li class="todo-item">
    <form
      v-if="isEdit"
      class="todo-item__form"
      @submit.prevent="updateTodo"
    >
      <todo-form :todo="todo" />
      <todo-button
        variant="secondary"
        type="button"
        @click="toggleEdit"
      >
        Cancel
      </todo-button>
      <todo-button
        variant="primary"
        type="submit"
      >
        Save
      </todo-button>
    </form>
    <template v-else>
      <span class="todo-item__title">{{ todo.title }}</span>
      <span class="todo-item__status">{{ todo.status }}</span>
      <todo-button
        variant="icon"
        @click="toggleEdit"
      >
        Edit
      </todo-button>
      <todo-button
        variant="danger"
        @click="deleteTodo(todo)"
      >
        Delete
      </todo-button>
    </template>
  </li>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { deleteTodoById, updateTodoById } from '@vue-workspace/api'
import { ref } from 'vue'
import TodoButton from './todo-button.vue'
import TodoForm from './todo-form.vue'
import { usePagination } from './use-pagination'
import type { GetTodosResponses, Todo } from '@vue-workspace/api/types'

const props = defineProps<{
  todo: Todo
}>()

const isEdit = ref(false)

const pagination = usePagination()
const queryClient = useQueryClient()

async function invalidateTodos() {
  await queryClient.invalidateQueries({ queryKey: ['todos'] })
  return queryClient.getQueryData<GetTodosResponses[200]>(['todos', pagination.pagination])
}

function toggleEdit() {
  isEdit.value = !isEdit.value
}

function deleteTodo(todo: Todo) {
  deleteTodoById({ path: { id: todo.id } }).then(async () => {
    const data = await invalidateTodos()

    // If the deleted todo was the last one, go back one page
    if (data && data.data.length === 0 && data.total !== 0) {
      pagination.updatePagination({ target: 'prev', total: data.total })
    }
  })
}

function updateTodo(event: SubmitEvent) {
  const formData = new FormData(event.target as HTMLFormElement)
  const todo = Object.fromEntries(formData) as Todo
  if (!todo.title) return

  updateTodoById({
    path: { id: props.todo.id },
    body: todo,
  }).then(() => {
    toggleEdit()
    invalidateTodos()
  })
}
</script>

<style scoped lang="scss">
.todo-item {
  background: hsl(var(--card));
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: 1px solid hsl(var(--border));
  transition: all 0.2s ease;

  &__status {
    color: hsl(var(--muted-foreground));
    font-size: 0.875rem;
    background-color: hsl(var(--muted));
    padding: 4px;
    border-radius: 4px;
  }

  &__form {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
  }

  &__title {
    flex: 1;
    color: hsl(var(--card-foreground));
    font-size: 0.875rem;
    word-break: break-word;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: hsl(var(--ring) / 0.3);
  }
}
</style>
