module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  // },
  plugins: [
    'vue',
  ],
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        'html': {
          'void': 'never',
          'normal': 'never',
          'component': 'always',
        }
      }
    ],
  },
};
