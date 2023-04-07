module.exports = {
  ...require('@jsxcss/eslint/common.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
