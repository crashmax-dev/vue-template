# @vue-workspace/vite-config

Shared Vite helpers for apps and Histoire.

## Exports

| Helper | Purpose |
|--------|---------|
| `alias(import.meta.url)` | `@` → `./src` |
| `vuePlugin` | `@vitejs/plugin-vue` (Options API off) |
| `iconsPlugin` | `unplugin-icons` + auto components |
| `staticCopyPlugin` | Copy UI public assets into app build |
| `vueDevtools` | Vue DevTools Vite plugin (opt-in) |
| `tailwindPlugin` | `@tailwindcss/vite` re-export |
| `reverseProxy(url)` | Proxy `/api` → backend URL |

## Example

```text
import {
  alias,
  iconsPlugin,
  reverseProxy,
  vueDevtools,
  vuePlugin,
} from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vuePlugin, iconsPlugin, vueDevtools()],
  resolve: { alias: alias(import.meta.url) },
  server: {
    proxy: reverseProxy(process.env.VITE_API_PROXY_TARGET ?? 'http://localhost:8080'),
  },
})
```

This package builds to `dist` — run `pnpm build` (or let Turbo `^build` handle it) before consumers resolve types.
