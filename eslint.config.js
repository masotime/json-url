// eslint.config.js
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import babelParser from "@babel/eslint-parser";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "coverage/**"],
  },

  // Core recommended rules
  js.configs.recommended,

  // import plugin's recommended rules
  importPlugin.flatConfigs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // no .babelrc needed to lint
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      // keep your resolver from .eslintrc
      "import/resolver": {
        "babel-module": {},
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-console": "off",
    },
  },
];
