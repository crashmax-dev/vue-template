import { HstVue } from '@histoire/plugin-vue'
import {
  css,
  iconsPlugin,
  staticCopyPlugin,
  vuePlugin,
} from '@vue-workspace/vite-config'
import { defineConfig } from 'histoire'

export default defineConfig({
  outDir: 'dist',
  setupFile: './src/histoire.setup.ts',
  routerMode: 'hash',
  theme: {
    title: 'UI',
  },
  defaultStoryProps: {
    autoPropsDisabled: true,
    responsiveDisabled: true,
  },
  plugins: [
    HstVue(),
  ],
  vite: {
    base: '',
    css,
    plugins: [
      vuePlugin,
      iconsPlugin,
      staticCopyPlugin,
    ],
  },
})
