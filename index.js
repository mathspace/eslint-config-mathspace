module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb",
    // These prettier configs are used to disable inherited rules that conflict
    // with the way prettier will format code. Full info here:
    // https://github.com/prettier/eslint-config-prettier
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
    "import",
    "react",
    "prettier"
  ],
  "rules": {
    "flowtype/define-flow-type": "error",
    "flowtype/require-valid-file-annotation": [
      2,
      "always"
    ],
    "flowtype/type-id-match": [
      "error",
      "^([A-Z][a-z0-9]+)+$"
    ],
    "flowtype/use-flow-type": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/test.jsx", "**/demo.jsx",  "**/*.demo.jsx", "**/demo/*.jsx"] }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "no-duplicate-imports": "off",
    "no-nested-ternary": "off",
    "no-warning-comments": "warn",
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      "never"
    ],
    "react/require-extension": "off",
    "react/sort-comp": [
      "error",
      {
        "order": [
          "type-annotations",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        // Options to pass to prettier: https://github.com/prettier/prettier#api
        "singleQuote": true,
        "trailingComma": "all"
      }
    ]
  }
};
