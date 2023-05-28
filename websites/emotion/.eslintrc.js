module.exports = {
  root: true,
  extends: ['@jsxcss/eslint-config/next'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
}
