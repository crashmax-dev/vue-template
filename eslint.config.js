import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'kebab-case', {
        registeredComponentsOnly: false
      }]
    }
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': ['error', 'never'],
      'style/arrow-parens': 'off'
    }
  }
})
