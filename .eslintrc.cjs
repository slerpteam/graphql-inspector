module.exports = {
  root: true,
  ignorePatterns: ['action/index.js'],
  extends: ['@theguild', '@theguild/eslint-config/json', '@theguild/eslint-config/yml'],
  overrides: [
    {
      files: ['website/**'],
      extends: '@theguild/eslint-config/react',
    },
    {
      files: ['**'],
      rules: {
        'logical-assignment-operators': 'off',
        'prefer-object-has-own': 'off', // enable in next major
        // TODO: enable following rules
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'n/no-restricted-import': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        'yml/no-empty-mapping-value': 'off',
        '@typescript-eslint/parser': 'off',
        'no-undef': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'no-console': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: [
        '**/__tests__/**',
        '**/*.spec.ts',
        '**/*.test.ts',
        'e2e/**',
        '**/__integration-tests__/**',
      ],
      rules: {
        'import/extensions': 'off',
      },
    },
    {
      files: ['.github/**/*'],
      rules: {
        'yml/plain-scalar': 'off',
      },
    },
  ],
};
