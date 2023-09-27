/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
      
  ],
  "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
