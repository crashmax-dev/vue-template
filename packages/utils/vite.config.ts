import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    sourcemap: true,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: './src/utils.ts',
      name: 'utils',
      fileName: 'utils'
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    }
  }
})
