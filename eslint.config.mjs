import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import boundaries from "eslint-plugin-boundaries";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: { boundaries },
    settings: {
      "boundaries/elements": [
        { type: "shared",   pattern: "src/shared/**" },
        { type: "entities", pattern: "src/entities/**" },
        { type: "features", pattern: "src/features/**" },
        { type: "widgets",  pattern: "src/widgets/**" },
        { type: "pages",    pattern: "src/pages/**" },
        { type: "app",      pattern: "src/app/**" },
      ],
    },
    rules: {
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: { type: "entities" }, allow: { to: { type: ["shared"] } } },
            { from: { type: "features" }, allow: { to: { type: ["shared", "entities"] } } },
            { from: { type: "widgets" }, allow: { to: { type: ["shared", "entities", "features"] } } },
            { from: { type: "pages" }, allow: { to: { type: ["shared", "entities", "features", "widgets"] } } },
            { from: { type: "app" }, allow: { to: { type: ["shared", "entities", "features", "widgets", "pages"] } } },
          ],
        },
      ],
    },
  },
  {
    rules: {
      // Unused variables are errors; prefix with _ to opt out
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Explicit return types on functions (expressions exempt)
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      // No inline style objects passed as string props
      "react/style-prop-object": "error",
      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Next.js
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
