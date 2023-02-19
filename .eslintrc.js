module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint-config-prettier',
  ],
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': 'error',
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
