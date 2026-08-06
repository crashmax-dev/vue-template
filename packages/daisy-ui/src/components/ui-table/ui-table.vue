<template>
  <div class="ui-table">
    <table
      class="table table-zebra table-pin-rows ui-table__table"
      :style="tableStyle"
    >
      <thead>
        <tr
          v-for="headerGroup of table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <th
            v-for="header of headerGroup.headers"
            :key="header.id"
            :class="[
              header.column.getCanSort() ? 'cursor-pointer select-none' : '',
              headerClass?.(header.column.id),
            ]"
            @click="onHeaderClick(header.column)"
          >
            <slot
              :name="`header-${header.column.id}`"
              :header="header"
              :column="header.column"
            >
              <flex-render
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!rows.length">
          <td
            class="text-center opacity-60"
            :colspan="Math.max(table.getAllLeafColumns().length, 1)"
          >
            {{ emptyText }}
          </td>
        </tr>
        <tr
          v-for="row of rows"
          :key="row.id"
        >
          <td
            v-for="cell of row.getVisibleCells()"
            :key="cell.id"
            :class="cellClass?.(cell.column.id)"
          >
            <slot
              :name="`cell-${cell.column.id}`"
              :cell="cell"
              :row="row"
              :value="cell.getValue()"
            >
              <flex-render
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="TData">
import { FlexRender } from '@tanstack/vue-table'
import { computed } from 'vue'
import type { Column, Table } from '@tanstack/vue-table'

const props = withDefaults(defineProps<{
  table: Table<TData>
  emptyText?: string
  minWidth?: string
  headerClass?: (columnId: string) => string | undefined
  cellClass?: (columnId: string) => string | undefined
}>(), {
  emptyText: 'No data',
  minWidth: '40rem',
  headerClass: undefined,
  cellClass: undefined,
})

const emit = defineEmits<{
  'click:header': [column: Column<TData, unknown>]
}>()

const rows = computed(() => props.table.getRowModel().rows)

const tableStyle = computed(() => ({
  minWidth: `max(100%, ${props.minWidth})`,
}))

function onHeaderClick(column: Column<TData, unknown>) {
  if (!column.getCanSort()) return
  emit('click:header', column)
}
</script>

<style scoped>
/*
  Flex parents default to min-width/min-height: auto, which expands to the
  table's intrinsic size and prevents overflow scrolling. Force the scroller
  to respect the allocated box, then let the table grow past it.
*/
.ui-table {
  box-sizing: border-box;
  box-shadow:
    0 1px 0 color-mix(in oklab, var(--color-base-content) 6%, transparent),
    0 8px 24px -16px color-mix(in oklab, #000 55%, transparent);
  border: 1px solid var(--color-base-300);
  border-radius: var(--radius-box);
  background-color: var(--color-base-200);
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 0;
  overflow: auto;
}

.ui-table__table {
  width: 100% !important;
}

.ui-table :deep(thead tr),
.ui-table :deep(.table-pin-rows thead tr) {
  background-color: var(--color-base-300);
  color: var(--color-base-content);
}

.ui-table :deep(tbody tr) {
  background-color: var(--color-base-200);
}

.ui-table :deep(.table-zebra tbody tr:nth-child(even)) {
  background-color: color-mix(in oklab, var(--color-base-100) 65%, var(--color-base-200));
}

.ui-table :deep(tbody tr:hover) {
  background-color: color-mix(in oklab, var(--color-base-content) 6%, var(--color-base-200));
}
</style>
