import antfu from '@antfu/eslint-config'
import pinia from 'eslint-plugin-pinia'

export default antfu({
  typescript: true,
  markdown: true,
  yaml: true,
  vue: true,
  ignores: [
    'packages/api/src/api/*',
  ],
  formatters: {
    css: true,
    prettierOptions: {
      plugins: ['prettier-plugin-css-order'],
    },
  },
  plugins: {
    pinia,
  },
  rules: {
    // pinia
    ...pinia.configs.recommended.rules,
    'pinia/prefer-single-store-per-file': ['error'],
    'pinia/prefer-use-store-naming-convention': ['error'],

    // js
    'no-nested-ternary': 'error',
    'max-params': ['error', 3],
    'ts/no-unused-expressions': ['error', {
      allowTernary: false,
    }],

    // vue
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
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
    'vue/define-props-destructuring': ['error', {
      destructure: 'never',
    }],
    'vue/define-macros-order': ['error', {
      order: [
        'defineOptions',
        'defineProps',
        'defineModel',
        'defineEmits',
        'defineSlots',
      ],
      defineExposeLast: true,
    }],
    'vue/no-required-prop-with-default': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-macro-variable-name': 'error',
    'vue/enforce-style-attribute': ['error', {
      allow: ['scoped'],
    }],

    // imports
    'perfectionist/sort-imports': ['error', {
      groups: [
        'value-builtin',
        'value-external',
        ['value-internal', 'type-internal'],
        ['value-parent', 'value-sibling', 'value-index'],

        'type-import',
        ['type-parent', 'type-sibling', 'type-index'],

        'side-effect',
        'ts-equals-import',
        'unknown',
      ],
      newlinesBetween: 'ignore',
      order: 'asc',
      type: 'natural',
    }],

    // off
    'curly': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'no-cond-assign': 'off',
    'no-unused-vars': 'off',
    'no-template-curly-in-string': 'off',
    'ts/no-redeclare': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/method-signature-style': 'off',
    'ts/consistent-type-definitions': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
    'antfu/if-newline': 'off',
    'antfu/no-top-level-await': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'regexp/no-obscure-range': 'off',
    'regexp/no-super-linear-backtracking': 'off',

    // warns
    'unused-imports/no-unused-imports': 'warn',

    // errors
    'no-else-return': 'error',
  },
  stylistic: {
    overrides: {
      'style/implicit-arrow-linebreak': ['error', 'beside'],
      'style/nonblock-statement-body-position': ['error', 'beside'],
      'style/brace-style': ['warn', '1tbs'],
      'style/arrow-parens': 'off',
    },
  },
})
