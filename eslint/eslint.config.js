import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly'
      }
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single']
    }
  }
];
