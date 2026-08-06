# Publishing packages to npm (optional)

This recipe is **not** wired into CI. Use it only when you intentionally publish workspace packages.

## 1. GitHub Actions snippet

Add the following to `.github/workflows/ci.yaml` (or a dedicated release workflow) and set `NPM_TOKEN` in repository secrets:

```yaml
- name: Publish packages to NPM
  shell: bash
  run: |
    echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > ~/.npmrc
    pnpm -r --filter=./packages/* publish --access public --provenance
```

## 2. Library Vite config

For packages that should ship as ESM libraries:

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

## 3. Package exports

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

Mark packages you do **not** want published as `"private": true` (default in this template).
