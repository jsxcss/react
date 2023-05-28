module.exports = {
  root: true,
  extends: ['@jsxcss/eslint-config/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
