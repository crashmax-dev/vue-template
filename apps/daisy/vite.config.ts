import tailwindcss from '@tailwindcss/vite'
import { vuePlugin } from '@vue-workspace/vite-config'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vuePlugin,
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
})
