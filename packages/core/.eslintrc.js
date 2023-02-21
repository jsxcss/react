module.exports = {
  ...require('@fullcss/eslint/react.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
