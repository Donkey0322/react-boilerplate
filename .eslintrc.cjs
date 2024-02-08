module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "simple-import-sort", "no-relative-import-paths"],
  rules: {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // External packages
          ["^@?\\w"],
          // Type imports
          ["^.*\\u0000$"],

          ["^@"],

          // Side effect imports
          ["^\\u0000"],

          // Style imports
          ["^.+\\.s?css$"],

          // Static assets
          ["^@/(static|assets)(/.*|$)"],
        ],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { allowSameFolder: false, prefix: "@", rootDir: "src" },
    ],
  },
};
