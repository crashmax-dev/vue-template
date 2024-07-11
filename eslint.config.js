import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  markdown: true,
  yaml: true,
  rules: {
    'curly': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'antfu/if-newline': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
  },
  vue: {
    overrides: {
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/block-order': ['warn', {
        order: [['script', 'template'], 'style'],
      }],
    },
  },
  stylistic: {
    overrides: {
      'style/brace-style': ['warn', '1tbs'],
      'style/arrow-parens': 'off',
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',
            'external',
            [
              'internal',
            ],
            [
              'parent',
              'sibling',
            ],
            'index',
            'type',
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
          'pathGroups': [
            {
              pattern: '@pnpm-workspace/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
})
