import { createRouter, createWebHashHistory } from 'vue-router'

export const RoutePath = {
  Home: '/',
  Counter: '/counter',
} as const

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.Home,
      name: 'home',
      component: () => import('@/pages/home/home.vue'),
    },
    {
      path: RoutePath.Counter,
      name: 'counter',
      component: () => import('@/pages/counter/counter.vue'),
    },
  ],
})
