const config = require('@jsxcss/eslint/common.js')

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    ...config.rules,
    'import/no-unresolved': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-array-index-key': ['off'],
  },
}
