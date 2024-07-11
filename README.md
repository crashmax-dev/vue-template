# Vue 3 Template

## Requirements

- Node.js >=20.15.x
- PNPM 9.5.0

## Stack

- PNPM
- Turborepo
- Vite
- Vue
- Storybook

## Scripts

- `pnpm i --frozen-lockfile` — Install dependencies
- `pnpm dev` — Running playground (http://localhost:5173) and storybook (http://localhost:6006)
- `pnpm build` — Building apps and packages
- `pnpm build:packages` — Building all packages
- `pnpm lint` — Check the linting
- `pnpm lint:fix` — Linting and fixing

## CI

- Q: How do i publish packages to NPM?
- A: Add the code below to [.github/workflows/ci.yml](.github/workflows/ci.yml) and add `NPM_TOKEN` to the GitHub repository secrets.

```yaml
- name: Publish packages to NPM
  shell: bash
  run: |
    echo "//registry.npmjs.org/:_authToken="${{ secrets.NPM_TOKEN }}"" > ~/.npmrc
    pnpm -r --filter='./packages/*' publish --access public --provenance
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
