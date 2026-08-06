# @vue-workspace/daisy-ui

Vue components styled with DaisyUI + Tailwind v4. Consumed by `apps/daisy` and playground DaisyUI surfaces.

The consumer app must `@source` this package so Tailwind picks up class names.

## Usage

```ts
import {
  UiSelect,
  UiTable,
  UiToaster,
  createColumnHelper,
  dismissAllToasts,
  dismissToast,
  getCoreRowModel,
  toast,
  useToasts,
  useVueTable,
} from '@vue-workspace/daisy-ui'
```

Mount `<UiToaster />` once near the app root, then call `toast()` / helpers from anywhere:

```ts
toast.success('Saved')
toast.error('Request failed', { title: 'API error', duration: 6000 })
toast.info('Sticky', { duration: null })
dismissToast(id)
dismissAllToasts()
```

`UiTable` wraps TanStack Table with DaisyUI styling. It scrolls both axes inside a constrained parent (`min-width/height: 0` + `overflow: auto`), keeps a sticky header via `table-pin-rows`, and uses `minWidth` (default `40rem`) so narrow viewports get horizontal scroll instead of squashed columns.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm test` | Vitest unit tests |
| `pnpm type-check` | `vue-tsc` |
