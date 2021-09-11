# Installation

Install the module using one of the following commands (depending if you're using NPM or Yarn in your project):

```bash
npm install --save-dev @eliasjnior/eslint-config-settings
yarn add -D @eliasjnior/eslint-config-settings
```

After that you need to install the peer dependencies:

```
npx install-peerdeps --dev @eliasjnior/eslint-config-settings
```

Now you're good to go creating your `.eslintrc.json` file:

```json
{
  "extends": "@eliasjnior/eslint-config-settings/react"
}
```