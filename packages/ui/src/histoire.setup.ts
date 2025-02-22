import { defineSetupVue3 } from '@histoire/plugin-vue'
import HistoireWrapper from './histoire-wrapper.vue'
import './assets/themes/zinc.css'
import './assets/styles/main.scss'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  addWrapper(HistoireWrapper)
})
