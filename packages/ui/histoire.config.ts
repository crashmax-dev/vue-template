import { HstVue } from '@histoire/plugin-vue'
import { css, plugins } from '@vue-workspace/vite-config'
import { defineConfig } from 'histoire'

export default defineConfig({
  outDir: 'dist',
  setupFile: './src/histoire/histoire.setup.ts',
  routerMode: 'hash',
  theme: {
    title: 'UI',
  },
  plugins: [
    HstVue(),
  ],
  vite: {
    base: '',
    css,
    plugins: plugins(),
  },
})
