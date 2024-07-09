// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
    {
        files: ["**/*.ts", "*.json", "*.js"],
        ignores: [
            ".github/*",
            "iac/*",
            "angular.json",
            "node_modules/*",
            ".angular/cache/18.0.7/vite/deps/*",
            ".angular/cache/18.0.7/mazca_front/*",
            ".angular/cache/18.0.7/babel-webpack/*",
            "public/*",
            "eslint.config.js",
            "tsconfig.json",
            "tsconfig.app.json",
            "tsconfig.spec.json",
            "package.json",
            "package-lock.json"
        ],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended
        ],
        processor: angular.processInlineTemplates,
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "app",
                    style: "kebab-case"
                }
            ]
        }
    },
    {
        files: ["**/*.html"],
        ignores: [
            ".github/*",
            "iac/*",
            "angular.json",
            "node_modules/*",
            ".angular/cache/*",
            "public/*",
            "eslint.config.js",
            "tsconfig.json",
            "tsconfig.app.json",
            "tsconfig.spec.json",
            "package.json",
            "package-lock.json"
        ],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility
        ],
        rules: {}
    }
);
