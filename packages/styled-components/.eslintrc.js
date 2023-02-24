module.exports = {
  ...require('@jsxcss/eslint/react.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
