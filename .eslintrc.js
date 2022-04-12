module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    console: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  rules: {
    'class-methods-use-this': 'warn',
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'no-console': ['warn'],
    'no-implicit-coercion': [2, {
      boolean: true,
      number: true,
      string: true,
      allow: ['!!'],
    }],
    'no-unused-vars': 'off',
    'no-use-before-define': 'warn',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'operator-linebreak': 'off',
    semi: [
      'error',
      'never',
    ],

    // Plugins below
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
