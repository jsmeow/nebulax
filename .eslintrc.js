module.exports = {
  'extends': [
    'eslint:all',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
    'prettier/standard'
  ],
  plugins: [
    'json',
    'standard',
    'prettier'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    // prettier rules
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true
      },
      {
        usePrettierrc: false
      }
    ],
    // eslint rules
    'max-len': [
      'error',
      {
        code: 120,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreUrls: true
      }
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: false,
        allowBlockEnd: false,
        allowObjectStart: false,
        allowObjectEnd: false,
        allowArrayStart: false,
        allowArrayEnd: false,
        allowClassStart: false,
        allowClassEnd: false
      }
    ],
    'max-params': 'off',
    'capitalized-comments': 'off',
    'no-nested-ternary': 'off',
    'no-invalid-this': 'off',
    'operator-assignment': 'off',
    'no-ternary': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'max-lines-per-function': [
      'error',
      150
    ],
    'max-statements': [
      'error',
      75
    ],
    'no-multi-assign': 'off',
    'prefer-destructuring': 'off',
    'multiline-comment-style': 'off',
    'one-var': 'off',
    'no-unused-expressions': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'id-length': 'off',
    'sort-keys': 'off',
    'init-declarations': 'off',
    'func-style': 'off',
    'no-undef': 'off',
    // node rules
    'node/no-unpublished-require': 'off'
  }
}