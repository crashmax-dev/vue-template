import { defineSetupVue3 } from '@histoire/plugin-vue'
import Wrapper from './wrapper.vue'
import '../assets/themes/zinc.css'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(Wrapper)
})
