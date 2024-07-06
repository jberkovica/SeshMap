module.exports = {
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/dom',
        'plugin:testing-library/react',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'vitest',
        'testing-library',
    ],
    root: true,
    rules: {
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                'newlines-between': 'never',
                pathGroups: [{ pattern: '@/**', group: 'internal' }],
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling', 'index'],
                ],
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
};
