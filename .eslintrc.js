const prettierConfig = require('./package.json').prettier;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'ts-react-important-stuff',
    'airbnb-typescript',
    'prettier',
    'eslint-config-prettier',
  ],
  plugins: ['eslint-plugin-prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'max-len': ['error', 110],
    'prettier/prettier': ['error', prettierConfig],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'react/prop-types': 'off',
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      },
    },
  ],
};
