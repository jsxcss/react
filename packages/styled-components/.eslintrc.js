module.exports = {
  ...require('@jsxcss/eslint/styled-components.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
