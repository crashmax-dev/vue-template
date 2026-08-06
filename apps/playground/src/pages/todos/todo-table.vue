<template>
  <div class="flex h-full min-h-0 min-w-0 flex-col overflow-hidden">
    <div class="min-h-0 min-w-0 flex-1 overflow-hidden">
      <ui-table
        :table="table"
        empty-text="No todos found"
        min-width="48rem"
        :header-class="headerClass"
        :cell-class="cellClass"
        @click:header="onHeaderClick"
      >
        <template #header-title="{ column }">
          Title
          <span
            v-if="isSorted(column.id)"
            class="ml-1 opacity-70"
          >{{ filters.sortOrder === 'asc' ? '↑' : '↓' }}</span>
        </template>
        <template #header-status="{ column }">
          Status
          <span
            v-if="isSorted(column.id)"
            class="ml-1 opacity-70"
          >{{ filters.sortOrder === 'asc' ? '↑' : '↓' }}</span>
        </template>
        <template #header-createdAt="{ column }">
          Created
          <span
            v-if="isSorted(column.id)"
            class="ml-1 opacity-70"
          >{{ filters.sortOrder === 'asc' ? '↑' : '↓' }}</span>
        </template>

        <template #cell-title="{ row }">
          <span
            class="block max-w-xs truncate"
            :title="row.original.title"
          >
            {{ row.original.title }}
          </span>
        </template>

        <template #cell-status="{ row }">
          <span
            class="badge !px-3"
            :class="statusBadgeClass(row.original.status)"
          >
            {{ row.original.status }}
          </span>
        </template>

        <template #cell-createdAt="{ row }">
          {{ formatDate(row.original.createdAt) }}
        </template>

        <template #cell-actions="{ row }">
          <div class="flex gap-2 justify-end">
            <button
              type="button"
              class="btn btn-ghost btn-square btn-sm"
              aria-label="Edit todo"
              title="Edit"
              @click="emit('edit', row.original)"
            >
              <pencil-icon class="size-5" />
            </button>
            <button
              type="button"
              class="btn btn-error btn-square btn-sm"
              aria-label="Delete todo"
              title="Delete"
              :disabled="deletingId === row.original.uuid"
              @click="askDelete(row.original)"
            >
              <trash-icon class="size-5" />
            </button>
          </div>
        </template>
      </ui-table>
    </div>

    <teleport to="body">
      <dialog
        ref="dialogRef"
        class="modal"
      >
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Delete todo?
          </h3>
          <p class="py-4">
            Are you sure you want to delete
            <span class="font-semibold">“{{ pendingTodo?.title }}”</span>?
            This cannot be undone.
          </p>
          <div class="modal-action">
            <button
              type="button"
              class="btn"
              :disabled="Boolean(deletingId)"
              @click="closeConfirm"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-error"
              :disabled="Boolean(deletingId)"
              @click="confirmDelete"
            >
              Delete
            </button>
          </div>
        </div>
        <form
          method="dialog"
          class="modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { deleteTodoById } from '@vue-workspace/api'
import {
  createColumnHelper,
  getCoreRowModel,
  UiTable,
  useVueTable,
} from '@vue-workspace/daisy-ui'
import { h, ref, useTemplateRef } from 'vue'
import PencilIcon from '~icons/heroicons-outline/pencil'
import TrashIcon from '~icons/heroicons-outline/trash'
import { usePagination } from './use-pagination'
import { useTodoFilters } from './use-todo-filters'
import { useTodos } from './use-todos'
import type { GetTodosResponses, Todo, TodoStatus } from '@vue-workspace/api/types'
import type { Column } from '@vue-workspace/daisy-ui'
import type { TodoSortBy } from './use-todo-filters'

const emit = defineEmits<{
  edit: [todo: Todo]
}>()

const todos = useTodos()
const filters = useTodoFilters()
const pagination = usePagination()
const queryClient = useQueryClient()
const deletingId = ref<string | null>(null)
const pendingTodo = ref<Todo | null>(null)
const dialogRef = useTemplateRef('dialogRef')

const sortableColumns = new Set<TodoSortBy>(['title', 'status', 'createdAt'])

const columnHelper = createColumnHelper<Todo>()

const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    enableSorting: true,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    enableSorting: true,
  }),
  columnHelper.accessor('createdAt', {
    header: 'Created',
    enableSorting: true,
  }),
  columnHelper.display({
    id: 'actions',
    header: () => h('span', { class: 'sr-only' }, 'Actions'),
    enableSorting: false,
  }),
]

const table = useVueTable({
  get data() {
    return todos.data.data
  },
  columns,
  manualSorting: true,
  getRowId: (row) => row.uuid,
  getCoreRowModel: getCoreRowModel(),
})

function headerClass(columnId: string) {
  if (columnId === 'title') return 'min-w-48 w-full'
  if (columnId === 'status') return 'min-w-32'
  if (columnId === 'createdAt') return 'min-w-44'
  if (columnId === 'actions') return 'min-w-28'
  return undefined
}

function cellClass(columnId: string) {
  if (columnId === 'createdAt') return 'whitespace-nowrap text-base opacity-80'
  if (columnId === 'actions') return 'whitespace-nowrap'
  if (columnId === 'status') return 'whitespace-nowrap'
  return undefined
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

function statusBadgeClass(status: TodoStatus) {
  switch (status) {
    case 'Active':
      return 'badge-success'
    case 'Completed':
      return 'badge-info'
    case 'Paused':
      return 'badge-warning'
    case 'Cancelled':
      return 'badge-error'
    default:
      return 'badge-ghost'
  }
}

function isSorted(columnId: string) {
  return filters.sortBy === columnId
}

function onHeaderClick(column: Column<Todo, unknown>) {
  if (!column.getCanSort()) return
  const sortBy = column.id as TodoSortBy
  if (!sortableColumns.has(sortBy)) return
  filters.setSort({ sortBy })
}

async function invalidateTodos() {
  await queryClient.invalidateQueries({ queryKey: ['todos'] })
  return queryClient.getQueryData<GetTodosResponses[200]>([
    'todos',
    pagination.pagination,
    filters.query,
  ])
}

function askDelete(todo: Todo) {
  pendingTodo.value = todo
  dialogRef.value?.showModal()
}

function closeConfirm() {
  dialogRef.value?.close()
  pendingTodo.value = null
}

async function confirmDelete() {
  const todo = pendingTodo.value
  if (!todo) return

  deletingId.value = todo.uuid
  try {
    await deleteTodoById({ path: { uuid: todo.uuid } })
    const data = await invalidateTodos()
    if (data && data.data.length === 0 && data.total !== 0) {
      pagination.updatePagination({ target: 'prev', total: data.total })
    }
    closeConfirm()
  } finally {
    deletingId.value = null
  }
}
</script>
