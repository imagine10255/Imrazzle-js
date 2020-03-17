module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: ['@typescript-eslint', 'redux-saga', 'react', 'react-hooks', 'jsx-a11y'],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'no-alert': 'off',
        'no-unused-vars': 'off',
        'max-len': 'off',
        'object-curly-spacing': ['error', 'never'],
        'prefer-destructuring': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-underscore-dangle': ['error', {allow: ['__NEXT_DATA__']}],
        'no-script-url': 'off',
        'consistent-return': 'off',
        indent: ['error', 4, {SwitchCase: 1, ignoredNodes: ['TemplateLiteral', 'TemplateLiteral *']}],
        semi: 'error',
        'react/jsx-indent': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/jsx-indent-props': ['error', 'first'],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never',
            beforeClosing: 'never'
        }],
        'react/display-name': 'off',
        'react/no-children-prop': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'react/jsx-one-expression-per-line': 'off',
        'react/no-danger': 'off',
        'react/prefer-stateless-function': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/alt-text': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': [2, {caseSensitive: true}],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'react/jsx-key': 'error',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        "react-hooks/rules-of-hooks": 'error',
        "react-hooks/exhaustive-deps": 'off',
        'quotes': ['error', 'single'],
        'global-require': 'off',
        'space-in-brackets': 'off',
        'no-plusplus': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'func-names': 'off',
        'radix': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'no-trailing-spaces': ['error', {'ignoreComments': true, 'skipBlankLines': true}],
        'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 1}],
        'padded-blocks': 'off',
        'prefer-object-spread': 'off',
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            // use <root>/tsconfig.json
            "typescript": {
                "alwaysTryTypes": true,
                "directory": "./tsconfig.json",
            },
        },
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            version: '16.13.0', // React version, default to the latest React stable release
        },
    },
    globals: {
        window: true,
        document: true,
    }
};
