/**
 * To publish the package to npm
 * you will need to specify exports in package.json
 *
 * "exports": {
 *   ".": {
 *     "types": "./dist/index.d.ts",
 *     "import": "./dist/index.js",
 *     "require": "./dist/index.umd.cjs"
 *   }
 * }
 */

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
