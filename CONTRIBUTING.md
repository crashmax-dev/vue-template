# Contributing

## Setup

```bash
pnpm i
```

Use Node `>=22.22` and pnpm `>=11.8` (see root `package.json` `engines` / `packageManager`).

## Quality checks

Before opening a PR, run:

```bash
pnpm lint
pnpm type-check
pnpm test
pnpm test:browser
```

Browser tests need Playwright Chromium once: `pnpm exec playwright install chromium`.

CI runs the same checks on pull requests. Deploy to GitHub Pages happens only on `master` after a successful build.

## Conventions

### Vue

- `<script setup lang="ts">` only (Options API is disabled in shared Vite config)
- Template: kebab-case components and events
- Block order: `template` → `script` → `style`
- Scoped styles only
- Prefer feature folders under `pages/<feature>/` with colocated components, composables, and tests

### Pinia

- Setup stores colocated with the feature
- Store id naming: `feature/use-name` (e.g. `todos/use-pagination`)
- Prefer composable-style `useX` exports

### Server state

- Use TanStack Vue Query for remote data
- Use generated client from `@vue-workspace/api`
- Keep MSW handlers next to mocks under `apps/playground/src/mocks`

### Lint & format

- ESLint flat config (`@antfu/eslint-config`) owns formatting via `eslint-plugin-format`
- Do not enable Prettier as a separate formatter (see `.vscode/settings.json`)

### Commits & PRs

- Keep changes focused; prefer small PRs
- Update docs when scripts, ports, or architecture change
