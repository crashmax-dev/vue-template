# Daisy app

Memory-match game demo built with Vue 3, Tailwind CSS v4, and DaisyUI 5. Depends on `@vue-workspace/daisy-ui` for shared DaisyUI components (e.g. `UiSelect` for board size).

## Scripts

```bash
pnpm --filter=daisy dev      # http://localhost:3001
pnpm --filter=daisy build
pnpm --filter=daisy preview
```

This app intentionally stays lean — no router/Pinia — to show a second styling track next to the SCSS-based playground UI kit. See [theming & styling docs](../../docs/theming-and-styling.md).
