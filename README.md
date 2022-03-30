# @boringlabsio/eslint-config
Shared eslint config

## Usage:

### Install config with all required plugins
```bash
yarn add -D @boringlabsio/eslint-config eslint-plugin-prettier eslint-plugin-unicorn eslint-plugin-import
```

### Extend eslint config with `@boringlabsio` and set `parserOptions` to support TypeScript

#### .eslintrc.cjs
```js
module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@boringlabsio']
};
```