# Testing

## Runners

| Kind | Glob | Environment | Where |
|------|------|-------------|-------|
| Unit | `*.test.ts` | happy-dom | playground, ui, utils |
| Browser | `*.browser.test.ts` | Playwright Chromium | playground |

Root commands:

```bash
pnpm test          # turbo run test (unit)
pnpm test:unit     # turbo run test:unit
pnpm test:browser  # playground Playwright browser tests
pnpm test:unit-ui  # UI package with Vitest UI
```

Playground filters:

```bash
pnpm --filter=@vue-workspace/playground test:unit
pnpm --filter=@vue-workspace/playground test:browser
```

Browser tests need Playwright browsers installed once:

```bash
pnpm exec playwright install chromium
```

## Helpers (playground)

Use `renderComponent` from `@/test/render-component` for browser tests. It mounts through the app shell with Pinia, Vue Router (memory history), and Vue Query configured.

Unit tests for composables/stores can import stores directly (active Pinia via `setActivePinia`) without the browser helper.

## CI

Pull requests and pushes run `lint`, `type-check`, and `test` (including browser project). Install Chromium in CI before `pnpm test`.

## Coverage

Coverage is not gated yet. Local reports can use Vitest `--coverage` once you add `@vitest/coverage-v8` if desired.
