// const prettierConfig = require('./package.json').prettier;

module.exports = {
  parser: '@typescript-eslint/parser',
  //   extends: ['eslint-config-airbnb', 'prettier', 'eslint-config-prettier'],
  extends: ['eslint-config-diwala'],
  //   plugins: ['eslint-plugin-prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  //   rules: {
  //     'max-len': ['error', 110],
  //     'prettier/prettier': ['error', prettierConfig],
  //   },
  //   overrides: [
  //     {
  //       files: ['**/*.tsx'],
  //       rules: {
  //         'import/prefer-default-export': 'off',
  //         'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  //         'react/prop-types': 'off',
  //         'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  //         // additional styles
  //         'react/react-in-jsx-scope': 'off',
  //         'func-names': 'off',
  //         'no-undef': 'off',
  //         'import/extensions': 'off',
  //         'import/no-unresolved': 'off',
  //         'react/jsx-filename-extension': 'off'
  //       },
  //     },
  //   ],
};
