module.exports = {
  ...require('@jsxcss/eslint/common.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-array-index-key': ['off'],
  },
}
