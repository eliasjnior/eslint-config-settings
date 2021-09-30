const prettierAirbnb = require('prettier-airbnb-config');

module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': ['error', prettierAirbnb],
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react$/', '/^react-dom$/'],
          ['/^@//', '/^src//', '/^~//'],
          'module',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'off',
  },
};
