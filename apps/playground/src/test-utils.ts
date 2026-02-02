import { createPinia } from 'pinia'
import { render as vitestRender } from 'vitest-browser-vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './app.vue'
import type { Component } from 'vue'

export async function renderComponent(
  component: Component,
  options: any = {},
) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        component,
      },
    ],
  })

  const pinia = createPinia()

  const screen = vitestRender(App, {
    ...options,
    global: {
      plugins: [
        router,
        pinia,
      ],
      ...options.global,
    },
  })

  await router.isReady()

  return screen
}
