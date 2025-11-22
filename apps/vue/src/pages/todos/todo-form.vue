<template>
  <input
    name="title"
    class="input-field"
    :value="todo.title"
  >

  <select
    :value="todo.status"
    name="status"
    class="select-field"
  >
    <option
      v-for="status of Object.values(TodoStatus)"
      :key="status"
      :value="status"
    >
      {{ status }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { TodoStatus } from '@vue-workspace/api/types'
import type { TodoWritable } from '@vue-workspace/api/types'

withDefaults(defineProps<{
  todo?: TodoWritable
}>(), {
  todo: () => ({
    title: '',
    status: TodoStatus.ACTIVE,
  }),
})
</script>

<style scoped lang="scss">
.input-field,
.select-field {
  padding: 0.625rem 0.875rem;
  border: 1px solid hsl(var(--input));
  border-radius: var(--radius);
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  background: hsl(var(--background));
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: hsl(var(--ring));
    outline: 2px solid transparent;
    outline-offset: 2px;
    ring: 2px;
    ring-color: hsl(var(--ring));
    ring-offset: 2px;
  }

  &::placeholder {
    color: hsl(var(--muted-foreground));
  }
}

.input-field {
  flex: 1;
}

.select-field {
  min-width: 140px;
  cursor: pointer;
  padding-right: 2.5rem;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="gray" d="M6 9L1 4h10z"/></svg>');
  background-repeat: no-repeat;
  background-position: calc(100% - 0.875rem) center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
