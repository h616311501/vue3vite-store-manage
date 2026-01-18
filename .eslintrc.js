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
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        // 格式相关（由 ESLint 管理）
        // 缩进：2 个空格（对 .vue <template> 使用 vue/html-indent）
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "vue/html-indent": ["error", 2, {
            "attribute": 1,
            "baseIndent": 1,
            "alignAttributesVertically": true,
            "ignores": []
        }],

        // 引号与分号
        "quotes": ["error", "single", { "avoidEscape": true }],
        "semi": ["error", "always"],

        // 尾随逗号（es5 风格）
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],

        // 空格与大括号
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],

        // 行宽（ESLint core 没有直接 rule 控制打印宽度，使用 max-len）
        "max-len": ["warn", { "code": 100, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreComments": true }],

        // TypeScript 特定规则（按需打开/关闭）
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",

        // Vue 推荐规则可按需覆盖（这里示例性关闭或调整若干）
        "vue/max-attributes-per-line": ["error", {
            "singleline": 3,
            "multiline": { "max": 1, "allowFirstLine": false }
        }],
        "vue/html-self-closing": ["error", {
            "html": { "void": "never", "normal": "never", "component": "always" },
            "svg": "always",
            "math": "always"
        }],

        // 其他常见规则
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    },
    overrides: [
        {
            // 对 .vue 文件中的 script 部分启用 @typescript-eslint 规则解析
            "files": [".vue"],
            "parser": "vue-eslint-parser",
            "parserOptions": {
                "parser": "@typescript-eslint/parser"
            }
        },
        {
            // 测试文件里的规则可放宽
            "files": ["/tests/", "**/.spec.", "**/.test.*"],
            "rules": {
                "no-console": "off"
            }
        }
    ]
};