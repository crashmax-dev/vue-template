# Vue 3 Template

## Requirements

> Node.js 20.12+, PNPM 9+

## Stack

- PNPM
- Turborepo
- Vite
- Vue
- Storybook

## Scripts

- `pnpm i --frozen-lockfile` — Install node dependencies
- `pnpm dev` — Running playground (http://localhost:5173) and storybook (http://localhost:6006)
- `pnpm build` — Building apps and packages
- `pnpm build:packages` — Building all packages
- `pnpm lint` — Check the linting
- `pnpm lint:fix` — Linting and fixing

## CI

- Q: How to publish to NPM?
- A: Add the code below to [.github/workflows/ci.yml](.github/workflows/ci.yml) and add `NPM_TOKEN` to GitHub repository secrets.

```yaml
- name: Publish packages to NPM
  shell: bash
  run: |
    echo "//registry.npmjs.org/:_authToken="${{ secrets.NPM_TOKEN }}"" > ~/.npmrc
    pnpm -r --filter='./packages/*' publish --access public --provenance
```
