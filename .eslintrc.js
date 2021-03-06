module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:unicorn/recommended", "prettier"],
  rules: {
    "no-void": ["error", { allowAsStatement: true }],
    "max-depth": "error",
    "max-len": ["error", { code: 120 }],
    "max-lines-per-function": "error",
    "max-lines": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": "error",
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, pascalCase: true } },
    ],
    "unicorn/no-array-reduce": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-useless-undefined": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "**/*/bin/*"],
      extends: ["standard", "prettier", "prettier/standard"],
      rules: {
        "unicorn/filename-case": ["error", { case: "kebabCase" }],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "standard-with-typescript",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/standard",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-import": "off",
      },
      parserOptions: {
        project: "./packages/**/tsconfig.json",
      },
    },
    {
      files: ["**/*spec*"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      rules: {
        "max-lines-per-function": "off",
      },
    },
  ],
  ignorePatterns: ["**/lib/**/*.js"],
  settings: {
    "import/parsers": {
      "import/internal-regex": ["^@q3log/"],
    },
  },
};
