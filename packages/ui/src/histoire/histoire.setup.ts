import { defineSetupVue3 } from '@histoire/plugin-vue'
import { createPinia } from 'pinia'
import Wrapper from './wrapper.vue'
import '../themes/zinc.css'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
  app.use(createPinia())
  addWrapper(Wrapper)
})
