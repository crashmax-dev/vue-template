import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app.vue'
import { enableMsw } from './libs/msw'
import { router } from './libs/router'
import './main.scss'

enableMsw().then(() => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)
  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          refetchOnMount: true,
          refetchOnWindowFocus: false,
        },
      },
    },
  })

  app.mount('#app')
})
