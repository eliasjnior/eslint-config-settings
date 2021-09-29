module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb-typescript', '../common/index.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
