module.exports = {
  ...require('@fullcss/eslint/next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
