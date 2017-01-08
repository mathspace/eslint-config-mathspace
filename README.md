## Install

Install the require peer dependencies:

```bash
# ESLint
npm i eslint babel-eslint -D
# Plugins
npm i eslint-plugin-flowtype eslint-plugin-import@1.16.0 eslint-plugin-jsx-a11y@2.2.3 eslint-plugin-react -D
# Airbnb configs
npm i eslint-config-airbnb-base@7.1.0 eslint-config-airbnb@11.1.0 -D
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
