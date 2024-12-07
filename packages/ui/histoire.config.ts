import { HstVue } from '@histoire/plugin-vue'
import { plugins, staticCopyPlugin } from '@vue-workspace/vite-config'
import { defineConfig } from 'histoire'

export default defineConfig({
  outDir: 'dist',
  setupFile: './src/histoire/histoire.setup.ts',
  theme: {
    title: 'UI',
  },
  plugins: [
    HstVue(),
  ],
  // vite: {
  //   plugins: [
  //     ...plugins,
  //     staticCopyPlugin,
  //   ],
  // },
})
