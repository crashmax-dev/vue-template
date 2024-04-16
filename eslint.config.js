import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'curly': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn'
  },
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['warn', 'kebab-case', {
        registeredComponentsOnly: false
      }],
      'vue/block-order': ['warn', {
        order: [['script', 'template'], 'style']
      }]
    }
  },
  stylistic: {
    overrides: {
      'style/comma-dangle': ['warn', 'never'],
      'style/arrow-parens': 'off',
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',
            'external',
            [
              'internal'
            ],
            [
              'parent',
              'sibling'
            ],
            'index',
            'type'
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          },
          'pathGroups': [
            {
              pattern: 'src/**',
              group: 'internal',
              position: 'after'
            }
          ]
        }
      ]
    }
  }
})
