/**
 * @fileoverview Tests for one-var.
 * @author Ian Christian Myers and Michael Paulukonis
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 * @copyright 2013 Michael Paulukonis. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint").linter,
    ESLintTester = require("eslint-tester");

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("rules/one-let", {
    valid: [
        {
            code: "function foo() { let bar = true; }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "function foo() { let baz = 1; if (qux) { let bar = false; } }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "function foo() { let baz = 1; if (qux) { let bar = false; } }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "let foo = function () { let bar = true; baz(); }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "function foo() { let bar = true, baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "function foo() { let bar = true; let baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { let bar = true; let baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { let a = [1, 2, 3]; let [b, c, d] = a; }",
            ecmaFeatures: {
                destructuring: true,
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { let a = 1; let b = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { let bar = true; if (qux) { let baz = false; } else { let quxx = 42; } }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "let foo = function () { let bar = true; if (qux) { let baz = false; } }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: " try { let foo = function () { let bar = true; if (qux) { let baz = false; } } } catch (e) { let foo = false }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        }
    ],
    invalid: [
        {
            code: "function foo() { let bar = true; let baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'let' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "let foo = function () { let bar = true; let baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'let' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "let foo = () => { let bar = true; let baz = false; }",
            ecmaFeatures: {
                blockBindings: true,
                arrowFunctions: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'let' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "function foo() { let bar = true, baz = false; }",
            args: [2, "never"],
            ecmaFeatures: {
                blockBindings: true
            },
            errors: [{
                message: "Split 'let' declaration into multiple statements.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "function foo() { let bar = true; let baz = false; }",
            args: [2, "always"],
            ecmaFeatures: {
                blockBindings: true
            },
            errors: [{
                message: "Combine this with the previous 'let' statement.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "function foo() { let a = [1, 2, 3]; let [b, c, d] = a; }",
            ecmaFeatures: {
                destructuring: true,
                blockBindings: true
            },
            args: [2, "always"],
            errors: [{
                message: "Combine this with the previous 'let' statement.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
