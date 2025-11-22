<template>
  <div class="todo-app">
    <form class="todo-form" @submit.prevent="createTodo">
      <div class="form-row">
        <todo-form />
      </div>

      <div class="form-actions">
        <todo-button
          type="submit"
          variant="primary"
          class="form-actions__submit"
        >
          Create
        </todo-button>
      </div>
    </form>

    <div class="todos-section">
      <div class="todos-header">
        <h2 class="todos-title">
          Todos (total: {{ todos.total }})
        </h2>
        <div class="pagination-controls">
          <todo-button
            variant="icon"
            :disabled="isPagePrevDisabled"
            @click="updatePagination('prev')"
          >
            Prev
          </todo-button>
          <todo-button
            variant="icon"
            :disabled="isPageNextDisabled"
            @click="updatePagination('next')"
          >
            Next
          </todo-button>
        </div>
      </div>

      <ul class="todos-list">
        <todo-item v-for="todo of todos.data" :key="todo.id" :todo="todo" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { postTodos } from '@vue-workspace/api'
import { computed, provide, shallowRef } from 'vue'
import TodoButton from './todo-button.vue'
import TodoForm from './todo-form.vue'
import TodoItem from './todo-item.vue'
import { paginationInjectionKey } from './use-pagination'
import { useTodos } from './use-todos'
import type {
  GetTodosData,
  TodoWritable,
} from '@vue-workspace/api/types'

const pageSize = 10
const pagination = shallowRef<GetTodosData['query']>({
  start: 0,
  limit: pageSize,
})

const { isFetching, todos, refetchTodos } = useTodos(pagination)

const isPagePrevDisabled = computed(() => {
  return pagination.value.start === 0 || isFetching.value
})

const isPageNextDisabled = computed(() => {
  return pagination.value.start + pageSize >= todos.value.total || isFetching.value
})

function updatePagination(target: 'prev' | 'next') {
  if (isFetching.value) return

  if (target === 'prev' && pagination.value.start === 0) return
  if (target === 'next' && pagination.value.start + pageSize >= todos.value.total) return

  pagination.value = {
    ...pagination.value,
    start: target === 'prev'
      ? pagination.value.start - pageSize
      : pagination.value.start + pageSize,
  }
}

function createTodo(event: SubmitEvent) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const todo = Object.fromEntries(formData) as TodoWritable
  if (!todo.title) return

  postTodos({ body: todo }).then(() => {
    form.reset()
    refetchTodos()
  })
}

provide(paginationInjectionKey, pagination)
</script>

<style scoped lang="scss">
.todo-app {
  width: 100%;
  background: hsl(var(--card));
  border-radius: var(--radius);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2.5rem;
  border: 1px solid hsl(var(--border));
}

.todo-form {
  margin-bottom: 3rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  gap: 0.75rem;

  &__submit {
    flex: 1;
  }
}

.todos-section {
  background: hsl(var(--muted) / 0.3);
  border-radius: var(--radius);
  padding: 1.5rem;
  border: 1px solid hsl(var(--border));
}

.todos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.todos-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin: 0;
}

.pagination-controls {
  display: flex;
  gap: 0.5rem;
}

.todos-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
