import {
  alias,
  iconsPlugin,
  reverseProxy,
  staticCopyPlugin,
  tailwindPlugin,
  vueDevtools,
  vuePlugin,
} from '@vue-workspace/vite-config'
import { defineConfig, loadEnv } from 'vite'

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const env = loadEnv(mode, process.cwd(), '')
const apiProxyTarget = env.VITE_API_PROXY_TARGET || 'http://localhost:8080'
const isVitest = Boolean(process.env.VITEST)

export default defineConfig({
  base: './',
  plugins: [
    vuePlugin,
    iconsPlugin,
    tailwindPlugin(),
    !isVitest && staticCopyPlugin,
    !isVitest && vueDevtools(),
  ],
  resolve: {
    alias: alias(import.meta.url),
  },
  server: {
    proxy: reverseProxy(apiProxyTarget),
  },
})
