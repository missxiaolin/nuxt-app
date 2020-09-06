module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'space-before-function-paren': 0,
    'indent': 'off',
    'eol-last': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'no-trailing-spaces': 'off',
    'unicorn/prefer-includes': 'off',
    'padded-blocks': 'off',
    'prefer-const': 'off',
    'object-shorthand': 'off',
    'curly': 'off',
    'no-lonely-if': 'off',
    'vue/max-attributes-per-line': 'off',
    'standard/no-callback-literal': 'off',
    'quotes': 'off',
    'no-unused-vars': 'off',
    'import/first': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'import/no-mutable-exports': 'off',
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'no-multiple-empty-lines': 0,
    'arrow-parens': 'off',
    'vue/no-v-html': 'off',
    'semi': 'off',
    'no-unused-vars': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  }
}
