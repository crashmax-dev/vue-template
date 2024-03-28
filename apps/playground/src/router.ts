import { createRouter, createWebHistory } from 'vue-router'

export const RoutePath = {
  Home: '/',
  Counter: '/counter'
} as const

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.Home,
      name: 'home',
      component: () => import('@/views/home-view.vue')
    },
    {
      path: RoutePath.Counter,
      name: 'counter',
      component: () => import('@/views/counter-view.vue')
    }
  ]
})
