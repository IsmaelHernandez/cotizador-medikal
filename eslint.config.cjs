const { node: nodeGlobals } = require('globals');
const eslintPluginVue = require('eslint-plugin-vue');

module.exports = [
  {
    languageOptions: {
      globals: {
        ...nodeGlobals,
      },
    },
    ignores: [
      '.gitignore',
      '*/node_modules/',
      '*/dist/',
      '*/build/',
      '*/coverage/',
      '*/vendor/',
    ],
    plugins: {
      vue: eslintPluginVue,
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-multi-spaces': 'error',
      'indent': ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'max-len': 'off',
      'vue/comment-directive': 'warn',
      'vue/no-unused-vars': 'warn',
    },
  },
];
