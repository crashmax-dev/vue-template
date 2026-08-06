# @vue-workspace/codemods

Sample [jscodeshift](https://github.com/facebook/jscodeshift) package for Vue/TS transforms. Included as a **template example** of how to ship codemods in the monorepo — not required to run apps.

The bundled transform (`ite-table-bordered`) migrates legacy `bordered` → `borderless` props. Replace it with your own transforms as needed.

## Usage

```bash
# Place target files under ./target, then:
pnpm codemod --transform=./src/ite-table-bordered/ite-table-bordered-transformer.ts
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm type-check` | Type-check transformers |
| `pnpm build` | Alias for type-check |
| `pnpm codemod` | Run jscodeshift against `./target` |
