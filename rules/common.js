module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "unused-imports",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    "prettier/prettier": "error",
    "unused-imports/no-unused-imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/no-unresolved": "error",
    "import/named": "off",
    "import/no-duplicates": "error",
    "newline-before-return": "error",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          ["/^react$/", "/^react-native$/", "/^react-dom$/"],
          ["/^next$/", "/^next//"],
          "module",
          ["/^@//"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};
