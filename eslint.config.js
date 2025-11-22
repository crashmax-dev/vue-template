import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  markdown: true,
  yaml: true,
  vue: true,
  ignores: [
    'packages/api/src/api/*',
  ],
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'kebab-case', {
      ignores: [],
    }],
    'curly': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'node/prefer-global/process': 'off',
    'antfu/if-newline': 'off',
    'antfu/no-top-level-await': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'eslint-comments/no-unlimited-disable': 'off',
    'perfectionist/sort-imports': ['error', {
      groups: [
        'builtin',
        'external',
        ['internal', 'internal-type'],
        ['parent', 'sibling', 'index'],

        'type',
        ['parent-type', 'sibling-type', 'index-type'],

        'side-effect',
        'object',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      order: 'asc',
      type: 'natural',
    }],
  },
  stylistic: {
    overrides: {
      'style/brace-style': ['warn', '1tbs'],
      'style/arrow-parens': 'off',
    },
  },
})
