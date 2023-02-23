module.exports = {
  ...require('@jsxcss/eslint/next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
