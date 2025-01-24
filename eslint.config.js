// @ts-check

import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
// @ts-expect-error ignore type errors
import importPlugin from 'eslint-plugin-import';

import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'src/tsconfig.json',
      '**/*.css',
      'node_modules/**/*',
      '.next',
      'out',
    ],
    files: ['src/**/*.{jsx,ts,tsx}'],
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    plugins: {
      '@next/next': nextPlugin,
    },
    settings: {
      'import/internal-regex': '^~/',
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-duplicate-head': 'off',
      '@next/next/no-img-element': 'error',
      '@next/next/no-page-custom-font': 'off',
      'react/display-name': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
);
