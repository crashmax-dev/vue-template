# Vue 3 Template

pnpm + Turborepo monorepo starter for Vue 3 apps with shared UI, OpenAPI client generation, MSW mocks, and dual Vitest (unit + browser).

## Requirements

- Node.js `>=22.22`
- pnpm `>=11.8`

## Monorepo map

| Path | Package | Role |
|------|---------|------|
| [`apps/playground`](apps/playground) | `@vue-workspace/playground` | Main demo: Pinia, Vue Router, TanStack Query, MSW, OpenAPI |
| [`apps/daisy`](apps/daisy) | `daisy` | DaisyUI + Tailwind v4 memory-match demo |
| [`packages/ui`](packages/ui) | `@vue-workspace/ui` | Shared UI kit (starter seed) + Histoire |
| [`packages/api`](packages/api) | `@vue-workspace/api` | OpenAPI → typed client, SDK, Valibot schemas |
| [`packages/utils`](packages/utils) | `@vue-workspace/utils` | Shared TS utilities (built to `dist`) |
| [`packages/vite-config`](packages/vite-config) | `@vue-workspace/vite-config` | Shared Vite plugins and helpers |
| [`packages/daisy-ui`](packages/daisy-ui) | `@vue-workspace/daisy-ui` | DaisyUI Vue components |
| [`packages/codemods`](packages/codemods) | `@vue-workspace/codemods` | Sample jscodeshift transforms |

## Stack

- [PNPM](https://pnpm.io) workspaces
- [Turborepo](https://turbo.build/repo/docs)
- [Vite](https://vite.dev) 8
- [Vue](https://vuejs.org) 3.5
- [Histoire](https://histoire.dev) (UI stories; currently `1.0.0-beta`)
- [Vitest](https://vitest.dev) 4 (happy-dom unit + Playwright browser)

## Getting started

```bash
pnpm i
pnpm dev
```

### Dev servers

| Target | URL | Command |
|--------|-----|---------|
| Playground | http://localhost:3000 | `pnpm dev:apps` / `pnpm --filter=@vue-workspace/playground dev` |
| Daisy | http://localhost:3001 | same as above |
| Histoire (UI) | http://localhost:6006 | `pnpm dev:ui` |

GitHub Pages deploy layout (after push to `master`):

- Playground → site root
- Histoire → `/histoire`
- Daisy → `/daisy`

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm i` | Install dependencies |
| `pnpm dev` | Run all `dev` tasks (apps + packages) |
| `pnpm dev:apps` | Run app dev servers only |
| `pnpm dev:ui` | Run Histoire for the UI package |
| `pnpm dev:packages` | Run package `dev` tasks |
| `pnpm build` | Build apps (packages build via `^build` deps) |
| `pnpm build:ui` | Build UI / Histoire |
| `pnpm build:packages` | Build packages |
| `pnpm test` | Run unit tests across the workspace |
| `pnpm test:unit` | Run unit tests |
| `pnpm test:browser` | Run playground browser tests (Playwright) |
| `pnpm test:unit-ui` | Run UI unit tests with [Vitest UI](https://vitest.dev/guide/ui.html) |
| `pnpm type-check` | Type-check the workspace |
| `pnpm lint` | ESLint check |
| `pnpm lint:fix` | ESLint check + fix |
| `pnpm generate-api` | Regenerate OpenAPI client from `packages/api` |
| `pnpm clean` | Remove build artifacts and Turbo cache |
| `pnpm check-update` | Interactive dependency updates |

## How-to (short)

### Add an app

1. Create `apps/<name>` with its own `package.json`, `vite.config.ts`, and `src/`.
2. Depend on workspace packages via `"workspace:*"`.
3. Reuse helpers from `@vue-workspace/vite-config` (`vuePlugin`, `alias`, `reverseProxy`, …).

### Add a package

1. Create `packages/<name>` and export from `package.json` `exports`.
2. If it builds to `dist`, add `build` / `clean` / `type-check` scripts so Turbo can orchestrate it.
3. Link it from apps with `"@vue-workspace/<name>": "workspace:*"`.

### OpenAPI + MSW

1. Edit [`packages/api/src/contracts/openapi.yaml`](packages/api/src/contracts/openapi.yaml).
2. Run `pnpm generate-api`.
3. Consume from `@vue-workspace/api` (and `/types`, `/client`, `/schemas`).
4. Mock in playground via `apps/playground/src/mocks` + MSW (dev only).

### Tests

- Unit: `*.test.ts` (happy-dom)
- Browser: `*.browser.test.ts` (Playwright Chromium)

```bash
pnpm --filter=@vue-workspace/playground test:unit
pnpm --filter=@vue-workspace/playground test:browser
```

## Documentation

- [Contributing](CONTRIBUTING.md)
- [Architecture](docs/architecture.md)
- [API & MSW](docs/api-and-msw.md)
- [Testing](docs/testing.md)
- [Theming & styling](docs/theming-and-styling.md)
- [Publishing packages (optional)](docs/publishing.md)

## License

[MIT](LICENSE)
