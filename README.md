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

Now you're good to go creating your `.eslintrc.js` file:

### React Project

```js
module.exports = {
  extends: [
    '@eliasjnior/eslint-config-settings/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  }
}
```

### Node project

```js
module.exports = {
  extends: [
    '@eliasjnior/eslint-config-settings/node',
  ],
  parserOptions: {
    project: './tsconfig.json',
  }
}
```

# Source code

## Testing out

Run the NPM link inside this project to link the project:
```
npm link
```

Run the other command inside the project:
```
npm link @eliasjnior/eslint-config-settings
```