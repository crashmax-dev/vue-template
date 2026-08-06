<template>
  <div class="flex flex-col gap-3">
    <fieldset class="fieldset w-full">
      <label class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        name="title"
        type="text"
        class="input input-bordered w-full"
        placeholder="Todo title"
        required
        :value="todo.title"
      >
    </fieldset>

    <fieldset class="fieldset w-full">
      <label class="label">
        <span class="label-text">Status</span>
      </label>
      <select
        name="status"
        class="select select-bordered w-full"
        :value="todo.status"
      >
        <option
          v-for="status of Object.values(TodoStatus)"
          :key="status"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
    </fieldset>
  </div>
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
