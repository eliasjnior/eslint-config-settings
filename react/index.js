module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "@eliasjnior/eslint-config-settings/common",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}