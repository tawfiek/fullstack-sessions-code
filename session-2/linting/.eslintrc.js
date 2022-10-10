module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    indent: ['error', 'tab'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn', { args: 'all' }],
    'no-useless-catch': ['off'],
  },
};
