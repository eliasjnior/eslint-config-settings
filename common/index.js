module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: true,
      },
    ],
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
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
  },
};
