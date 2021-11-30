module.exports = {
  plugins: ['prettier', 'unicorn', 'import'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      tabWidth: 2,
      parser: 'typescript',
    }],
    '@typescript-eslint/ban-types': ['error', { types: { Function: false } }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const', 'destructured', 'global'],
        format: ['strictCamelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['exported'],
        types: ['boolean', 'string', 'number', 'array'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'function',
        // allow StrictPascalCase for decorators
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: ['class', 'interface', 'typeAlias'],
        format: ['StrictPascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: '@/**', group: 'internal' },
          { pattern: '@hypequality/**', group: 'internal' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lib/**'],
            message: 'use `@hypequality/` instead of `lib/`',
          },
        ],
      },
    ],
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/filename-case': [
      'error',
      { cases: { camelCase: true, pascalCase: true } },
    ],
  },
  overrides: [
    {
      files: ['lib/**/*.ts'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      },
    },
    {
      files: ['src/db/migrations/*.ts'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*spec.ts', '*test.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};