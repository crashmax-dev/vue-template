# Vue 3 Template

## Requirements

- Node.js >=20.18.x
- PNPM 9.15.x

## Stack

- [PNPM](https://pnpm.io)
- [Turborepo](https://turbo.build/repo/docs)
- [Vite](https://vite.dev)
- [Vue](https://vuejs.org)
- [Histoire](https://histoire.dev)
- [Vitest](https://vitest.dev)

## Scripts

- `pnpm i` — Install dependencies
- `pnpm dev` — Running apps (http://localhost:5173) and Histoire (http://localhost:6006)
- `pnpm build` — Building apps and packages
- `pnpm lint` — Check the linting
- `pnpm lint:fix` — Linting and fixing

## Publish packages to NPM

Add the code below to [.github/workflows/ci.yaml](.github/workflows/ci.yaml) and add `NPM_TOKEN` to the GitHub repository secrets.

```yaml
- name: Publish packages to NPM
  shell: bash
  run: |
    echo "//registry.npmjs.org/:_authToken="${{ secrets.NPM_TOKEN }}"" > ~/.npmrc
    pnpm -r --filter=./packages/* publish --access public --provenance
```

and create a configuration for `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    target: 'esnext',
    sourcemap: true,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: './src/index.ts',
      name: 'utils',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
})
```

and you will need to specify the export in the package.json file

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "files": [
    "dist"
  ]
}
```
