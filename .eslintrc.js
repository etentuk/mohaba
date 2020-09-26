module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      "babel-module": { root: ["./src"] },
    },
  },
  plugins: ["react", "prettier", "jsx-a11y", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/camelcase": [0],
    camelcase: [0],
    "no-console": [0],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "prettier/prettier": "error",
    "react/prop-types": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-var-requires": [0],
    "@typescript-eslint/no-non-null-assertion": [0],
    "react/jsx-props-no-spreading": [0],
    "no-underscore-dangle": [0],
    "import/no-mutable-exports": [0],
    "import/prefer-default-export": [0],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
