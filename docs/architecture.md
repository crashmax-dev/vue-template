# Architecture

## Layout

```
apps/          runnable demos
packages/      shared libraries
docs/          template guides
```

Apps depend on packages via pnpm `workspace:*`. Turborepo orchestrates `build`, `dev`, `test`, `type-check`, and `clean`. Packages that emit `dist` (`utils`, `vite-config`) must build before consumers (`^build` / `dependsOn`).

## Feature folders (playground)

Prefer colocating by feature under `apps/playground/src/pages/<feature>/`:

```
pages/todos/
  todos.vue
  todo-form.vue
  todo-item.vue
  use-todos.ts          # Pinia + Vue Query
  use-pagination.ts     # Pinia store
```

Avoid large global `components/` / `stores/` trees unless something is truly cross-cutting (layout lives in `layout/`).

## State

| Concern | Tool | Pattern |
|---------|------|---------|
| Client UI state | Pinia setup stores | Id `feature/use-name`, export `useX` |
| Server/cache state | TanStack Vue Query | Queries/mutations next to the feature |
| Theme | provide/inject | `VThemeProvider` + `useTheme` |

Pinia ESLint rules enforce `use*` naming. Keep stores small and feature-scoped.

## Routing

Playground uses Vue Router with **hash history** (`createWebHashHistory`) so GitHub Pages works without server rewrites. Routes are lazy-loaded from `libs/router.ts`.

## Shared Vite config

`@vue-workspace/vite-config` centralizes Vue plugin options (Options API off), `@` alias, icons, static copy, optional DevTools, Tailwind plugin, and `/api` reverse proxy helper. Apps compose what they need in their own `vite.config.ts`.

## Optional extensions (not included)

Keep the template lean. Add these only when a fork needs them:

- i18n (`vue-i18n`)
- Auth / session layer
- Docker / production Node server
- Full e2e suite beyond Vitest browser mode
