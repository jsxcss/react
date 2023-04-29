const config = require('@jsxcss/eslint/next.js')

module.exports = {
  ...config,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-use-before-define': ['off'],
  },
}
