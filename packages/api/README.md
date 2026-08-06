# @vue-workspace/api

OpenAPI-first API package. Contract → typed Fetch client, SDK methods, and Valibot response schemas via [`@hey-api/openapi-ts`](https://heyapi.dev).

## Usage

```text
import { getTodos } from '@vue-workspace/api'
import { client } from '@vue-workspace/api/client'
import * as schemas from '@vue-workspace/api/schemas'
import type { GetTodosData } from '@vue-workspace/api/types'
```

Generated client `baseUrl` is `/api` (see `src/generate-api.ts`). In playground, MSW intercepts `/api` in development; for a real backend, set `VITE_API_PROXY_TARGET` and use `reverseProxy` from `@vue-workspace/vite-config`.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm generate-api` | Regenerate client from `src/contracts/openapi.yaml` |
| `pnpm build` | Same as `generate-api` |
| `pnpm dev` | Watch contract and regenerate |

Do not edit files under `src/api/` by hand — they are generated and ignored by ESLint.
