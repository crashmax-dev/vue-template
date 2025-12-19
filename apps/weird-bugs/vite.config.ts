import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      vueTemplate: true,
      imports: [
        'vue',
        '@vueuse/core',
        'pinia',
      ],
    }),
  ],
})
