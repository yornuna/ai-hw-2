module.exports = {
  "*.{ts,tsx,js,jsx}": [
    "eslint --fix --max-warnings 0",
    "prettier --write",
    () => "tsc --noEmit",
  ],
  "src/pages/**/ui/*.{tsx,jsx}": ["node scripts/check-semantic.mjs"],
  "*.css": ["prettier --write"],
  "*.{json,md}": ["prettier --write"],
};
