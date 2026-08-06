# @vue-workspace/ui

Shared Vue UI kit for the playground app. This is a **starter seed**, not a full design system — ship `VButton` + `VThemeProvider`, then grow components as needed.

## Usage

```text
import { useTheme, VButton, VThemeProvider } from '@vue-workspace/ui'
```

Themes live under `src/assets/themes/` (CSS variables). Import a theme SCSS entry from the consuming app (see playground `main.scss`).

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Histoire dev server (port 6006) |
| `pnpm build` | Type-check + Histoire static build |
| `pnpm test` | Vitest unit tests |
| `pnpm type-check` | `vue-tsc` |

## Notes

- Styling: SCSS + [CVA](https://cva.style) + [Reka UI](https://reka-ui.com) primitives
- Histoire is currently on `1.0.0-beta` — treat story tooling as unstable until a stable release
