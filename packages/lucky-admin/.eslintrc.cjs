module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error', // 开启 prettier 自动修复的功能
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
    },
};
