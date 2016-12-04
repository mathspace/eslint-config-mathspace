## Install

Install the require peer dependencies:

```bash
# ESLint
npm i eslint -D
# Plugins
npm i eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
# Airbnb configs
npm i eslint-config-airbnb-base eslint-config-airbnb -D
```

Install the Mathspace config:

```bash
# Mathspace config
npm i eslint-config-mathspace -D
```

Add your `.eslintrc` file:

```json
{
  "extends": "mathspace"
}
```
