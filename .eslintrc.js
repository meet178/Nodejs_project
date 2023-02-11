module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'overrides': [
  ],
  'parserOptions': {
    // 'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'capitalized-comments': ['error'],
    'multiline-comment-style': ['error', 'starred-block'],
    'no-return-await': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'lines-between-class-members': ['error', 'always'],
    'spaced-comment': [
      'error',
      'always',
      {
        'line': {
          'markers': ['/'],
          'exceptions': ['-', '+']
        },
        'block': {
          'markers': ['!'],
          'exceptions': ['*'],
          'balanced': true
        }
      }
    ]
  },
  'extends': ['eslint:recommended'],
  'ignorePatterns': [
    'helpers/postgres/query/*.helper.js',
    'scripts/*.js',
    'index.js'
  ]   
}
