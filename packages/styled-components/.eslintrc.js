module.exports = {
  ...require('@fullcss/eslint/styled-components.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
