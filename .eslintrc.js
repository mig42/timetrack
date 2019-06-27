module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  globals: {
    __static: true
  },
  settings: {
    'import/core-modules': [
      'electron'
    ]
  },
  plugins: [
    'vue'
  ],
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }]
  }
}
