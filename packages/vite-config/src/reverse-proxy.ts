import type { ProxyOptions } from 'vite'

export function reverseProxy(url: string): Record<string, string | ProxyOptions> {
  return {
    '/api': {
      target: url,
      rewrite: (path: string) => path.replace(/^\/api/, ''),
    },
  }
}
