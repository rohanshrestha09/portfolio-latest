module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals',
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'react/jsx-sort-props': [
         'warn',
         { callbacksLast: true, shorthandLast: true, reservedFirst: true },
      ],
      'react/prop-types': [0],
      'sort-imports': [
         'warn',
         {
            ignoreCase: true,
            ignoreDeclarationSort: true,
         },
      ],
   },
};
