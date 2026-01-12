/* .eslintrc.js */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // 交给 Prettier 处理格式化（通过 plugin:prettier/recommended）
    // 在这里将 Prettier 配置为 tabWidth:2（indent 由 Prettier 管理）
    "prettier/prettier": ["error", { tabWidth: 2, useTabs: false }],

    // 关闭与 Prettier 冲突的规则
    indent: "off",
    "vue/html-indent": "off",

    // 项目中常见的偏好规则（可按需调整）
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
