import { VueQueryPlugin } from '@tanstack/vue-query'
import { client } from '@vue-workspace/api/client'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app.vue'
import { mswSetup } from './libs/msw/msw-setup'
import { router } from './libs/router'
import './main.scss'

mswSetup().then(() => {
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

  client.interceptors.error.use((error) => {
    console.log({ error })
  })

  app.mount('#app')
})
