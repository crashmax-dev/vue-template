# Theming & styling

This monorepo still has **two styling tracks**, but `apps/playground` is now a **hybrid**:

| Surface | Track |
|---------|--------|
| Playground layout (drawer, navbar, menu, alerts) | DaisyUI (Track B) |
| Playground Form page | DaisyUI (Track B) + `@vue-workspace/daisy-ui` |
| Playground counter / todos / home demos | SCSS UI kit seed (Track A) — still migrating |
| `apps/daisy` | DaisyUI (Track B) |
| `packages/ui` + Histoire | SCSS + CVA + Reka UI (Track A) |

## Track A — `@vue-workspace/ui`

- SCSS + CSS variables (themes: zinc, purple, violet)
- [CVA](https://cva.style) for variants
- [Reka UI](https://reka-ui.com) primitives
- Theme switching via `VThemeProvider` / `useTheme` (persists in `localStorage`, toggles `body.dark` **and** `document.documentElement.dataset.theme`)

The UI package is a **starter seed** (`VButton`, `VThemeProvider`). Histoire (`pnpm dev:ui`) documents components. Histoire is currently `1.0.0-beta`.

## Track B — DaisyUI / `@vue-workspace/daisy-ui`

- Tailwind CSS v4 (`@tailwindcss/vite`)
- DaisyUI 5 plugin + theme tokens
- Playground entry: [`apps/playground/src/styles/daisy.css`](../apps/playground/src/styles/daisy.css)
- Daisy app entry: [`apps/daisy/src/styles/main.css`](../apps/daisy/src/styles/main.css)
- Vue wrappers in `@vue-workspace/daisy-ui` (`UiSelect`, `UiTable`, `UiToaster` + `toast()` API, re-exported `@tanstack/vue-table`)

Layout navigation uses the real DaisyUI [drawer](https://daisyui.com/components/drawer/) (`drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`) — not a hand-rolled SCSS clone.

## Theme sync

`VThemeProvider` sets:

- `body.dark` — for legacy SCSS variables on Track A pages
- `html[data-theme="dark"|"light"]` — for DaisyUI tokens on layout/form

Keep these in sync when toggling theme from the navbar.

## Why both?

The monorepo shows both CSS philosophies. New apps should pick one primary track. Playground hybrid exists to demo DaisyUI chrome + form inside the main template app without rewriting every demo page at once.
