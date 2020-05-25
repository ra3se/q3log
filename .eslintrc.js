/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "semi": ["error", "never"],
    "max-len": ["warn", { "code": 80 }]
  },
  overrides: [
    {
      files: ["*.js", "**/*/bin/*"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*spec*"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style"
      ]
    }
  ],
  ignorePatterns: [
    "**/lib/**/*.js"
  ]
}
