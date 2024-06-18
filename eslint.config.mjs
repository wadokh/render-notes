import globals from 'globals'
import pluginJs from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  {
    files: ['.eslintrc.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
    },
    env: {
      node: true,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': 0,
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 0,
    },
  },
  {
    ignores: ['dist/*']
  }
]