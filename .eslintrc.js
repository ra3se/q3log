module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "brace-style": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "constructor-super": "error",
    "curly": "error",
    "dot-location": "error",
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "func-call-spacing": "error",
    "func-style": ["error", "expression"],
    "import/export": "error",
    "import/first": "error",
    "import/no-absolute-path": ["error", { "esmodule": true, "commonjs": true, "amd": false }],
    "import/no-duplicates": "error",
    "import/no-named-default": "error",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-depth": "error",
    "max-len": ["error", { "code": 120 }],
    "max-lines-per-function": "error",
    "max-lines": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": "error",
    "new-cap": "error",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
    "one-var": ["error", "never"],
    "operator-linebreak": "error",
    "padded-blocks": ["error", { "blocks": "never", "switches": "never", "classes": "never" }],
    "quotes": "error",
    "rest-spread-spacing": "error",
    "semi-spacing": "error",
    "semi": ["error", "never"],
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "template-curly-spacing": "error",
    "unicorn/filename-case": [ "error", { "cases": { "camelCase": true, "pascalCase": true } } ],
    "unicorn/no-reduce": "off",
    "unicorn/prevent-abbreviations": "off",
    "wrap-iife": "error",
    "yoda": "error"
  },
  overrides: [
    {
      files: ["*.js", "**/*/bin/*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/filename-case": ["error", { "case": "kebabCase" }]
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-import": "off"
      }
    },
    {
      files: ["**/*spec*"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style"
      ],
      rules: {
        "max-lines-per-function": "off"
      }
    }
  ],
  ignorePatterns: [
    "**/lib/**/*.js"
  ],
  settings: {
    "import/parsers": {
      "import/internal-regex": ["^@q3log/"]
    }
  }
}
