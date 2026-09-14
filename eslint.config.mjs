import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";

export default tseslint.config(
    { ignores: ["dist/", "node_modules/", ".astro/", "build_html/"] },
    ...pluginAstro.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: pluginAstro.parser,
            parserOptions: {
                extraFileExtensions: [".astro"],
            },
        },
    },
    {
        files: ["**/*.{js,ts}"],
        ...eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "astro/no-unused-define-vars": "warn",
        },
    }
);