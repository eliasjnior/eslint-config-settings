module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always",
        "semi": false
      }
    ],
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", "always-multiline"],
    "newline-before-return": "error",
    "react/prop-types": "off",
    "camelcase": "off",
    "import-helpers/order-imports": [
      "error",
      {
        "newlinesBetween": "always",
        "groups":[
          "/^@//",
          "module",
          [
            "parent",
            "sibling",
            "index"
          ]
        ],
        "alphabetize":{
          "order":"asc",
          "ignoreCase":true
        }
      }
    ],
    "sort-imports":[
      "error",
      {
        "ignoreDeclarationSort":true
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["./*", "../*"]
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}