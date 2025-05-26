module.exports = {
  root: true,
  extends: ['@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native'],
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],

    quotes: ['error', 'single'],
    '@typescript-eslint/quotes': ['error', 'single'],

    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    '@typescript-eslint/no-explicit-any': 'error',

    'react-native/no-inline-styles': 'error',
    'react-native/split-platform-components': 'warn',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  },
}
