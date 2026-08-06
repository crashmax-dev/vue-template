<template>
  <div class="flex h-full min-h-0 min-w-0 flex-col overflow-hidden">
    <div class="grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)_auto] gap-4 overflow-hidden">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <v-page-header title="Todos">
          Total: {{ todos.data.total }}
        </v-page-header>

        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="btn btn-primary gap-2"
            @click="createModal?.open()"
          >
            <plus-icon class="size-5" />
            Create
          </button>

          <div class="join">
            <button
              type="button"
              class="btn join-item gap-2"
              :class="{ 'btn-active': filters.hasActiveFilters }"
              @click="filtersModal?.open()"
            >
              <funnel-icon class="size-5" />
              Filters
            </button>
            <button
              v-if="filters.hasActiveFilters"
              type="button"
              class="btn join-item btn-square btn-active"
              aria-label="Clear filters"
              title="Clear filters"
              @click="filters.resetSearchFilters()"
            >
              <x-icon class="size-5" />
            </button>
          </div>

          <button
            type="button"
            class="btn btn-error btn-outline gap-2"
            @click="resetTodos"
          >
            <refresh-icon class="size-5" />
            Reset
          </button>
        </div>
      </div>

      <div class="min-h-0 min-w-0 overflow-hidden">
        <todo-table @edit="editModal?.open($event)" />
      </div>

      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="btn"
          data-testid="todos-prev"
          :disabled="todos.isPagePrevDisabled"
          @click="pagination.updatePagination({
            target: 'prev',
            total: todos.data.total,
          })"
        >
          Prev
        </button>
        <button
          type="button"
          class="btn"
          data-testid="todos-next"
          :disabled="todos.isPageNextDisabled"
          @click="pagination.updatePagination({
            target: 'next',
            total: todos.data.total,
          })"
        >
          Next
        </button>
      </div>
    </div>

    <todo-create-modal ref="createModal" />
    <todo-edit-modal ref="editModal" />
    <todo-filters-modal ref="filtersModal" />
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import FunnelIcon from '~icons/heroicons-outline/filter'
import PlusIcon from '~icons/heroicons-outline/plus'
import RefreshIcon from '~icons/heroicons-outline/refresh'
import XIcon from '~icons/heroicons-outline/x'
import VPageHeader from '@/layout/v-page-header.vue'
import TodoCreateModal from './todo-create-modal.vue'
import TodoEditModal from './todo-edit-modal.vue'
import TodoFiltersModal from './todo-filters-modal.vue'
import TodoTable from './todo-table.vue'
import { usePagination } from './use-pagination'
import { useTodoFilters } from './use-todo-filters'
import { useTodos } from './use-todos'

const todos = useTodos()
const pagination = usePagination()
const filters = useTodoFilters()

const createModal = useTemplateRef('createModal')
const editModal = useTemplateRef('editModal')
const filtersModal = useTemplateRef('filtersModal')

function resetTodos() {
  const isConfirm = confirm('Reset todos?')
  if (!isConfirm) return
  window.__MSW__.todos?.createInitialData()
  filters.resetFilters()
  pagination.resetPagination()
  todos.refetchTodos()
}
</script>
