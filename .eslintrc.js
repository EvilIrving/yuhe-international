module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["simple-import-sort", "prettier", "@typescript-eslint"],
  rules: {
    "no-require-imports": "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "sort-imports": "off",
    "tailwindcss/no-custom-classname": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-require-imports": "off",
    "simple-import-sort/imports": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.ts",
    },
  },
};
