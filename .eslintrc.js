module.exports = {
  root: true,
  extends: ['prettier', '@react-native-community'],
  plugins: ['import', 'react-native', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          app: './src/app',
          assets: './src/assets',
          components: './src/components',
        },
      },
    },
  },
  ignorePatterns: ['**/__mocks__/**'],
  rules: {
    'react-native/no-unused-styles': 1,
    'react-hooks/exhaustive-deps': 'off',
  },
};
