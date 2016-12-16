module.exports = {
  "env": {
    "browser": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
    "import",
    "react"
  ],
  "rules": {
    "arrow-parens" : [0, "as-needed"],
    "flowtype/define-flow-type": "error",
    "flowtype/object-type-delimiter": ["error", "semicolon"],
    "flowtype/require-valid-file-annotation": [
      2,
      "always"
    ],
    "flowtype/semi": "error",
    "flowtype/space-after-type-colon": [
      "error",
      "always"
    ],
    "flowtype/space-before-type-colon": [
      "error",
      "never"
    ],
    "flowtype/type-id-match": [
      "error",
      "^([A-Z][a-z0-9]+)+$"
    ],
    "flowtype/use-flow-type": "error",
    "import/no-duplicates": "error",
    "no-duplicate-imports": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-warning-comments": [
      "error",
      {
        "terms": [
          "fixme"
        ]
      }
    ],
    "quote-props": [
      "error",
      "as-needed",
      {
        "numbers": true
      }
    ],
    "react/no-unused-prop-types": "off",
    "no-confusing-arrow": "off"
  }
};
