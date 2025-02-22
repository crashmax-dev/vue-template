import Vue from '@vitejs/plugin-vue'

export const vuePlugin = Vue({
  features: {
    optionsAPI: false,
    propsDestructure: false,
  },
})
