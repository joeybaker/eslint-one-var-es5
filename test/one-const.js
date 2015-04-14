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
eslintTester.addRuleTest("rules/one-const", {
    valid: [
        {
            code: "function foo() { const bar = true; }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "function foo() { const baz = 1; if (qux) { const bar = false; } }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "const foo = function () { const bar = true; baz(); }",
            ecmaFeatures: {
                blockBindings: true
            }
        },
        {
            code: "function foo() { const bar = true, baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "function foo() { const bar = true; const baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { const bar = true; const baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { const a = [1, 2, 3]; const [b, c, d] = a; }",
            ecmaFeatures: {
                destructuring: true,
                blockBindings: true
            },
            args: [2, "never"]
        },
        {
            code: "function foo() { let a = 1; const b = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "function foo() { const bar = true; if (qux) { const baz = false; } else { const quxx = 42; } }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: "const foo = function () { const bar = true; if (qux) { const baz = false; } }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        },
        {
            code: " try { const foo = function () { const bar = true; if (qux) { const baz = false; } } } catch (e) { const foo = false }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"]
        }
    ],
    invalid: [
        {
            code: "function foo() { const bar = true; const baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'const' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "const foo = function () { const bar = true; const baz = false; }",
            ecmaFeatures: {
                blockBindings: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'const' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "const foo = () => { const bar = true; const baz = false; }",
            ecmaFeatures: {
                blockBindings: true,
                arrowFunctions: true
            },
            args: [2, "always"],
            errors: [
                {
                    message: "Combine this with the previous 'const' statement.",
                    type: "VariableDeclaration"
                }
            ]
        },
        {
            code: "function foo() { const bar = true, baz = false; }",
            args: [2, "never"],
            ecmaFeatures: {
                blockBindings: true
            },
            errors: [{
                message: "Split 'const' declaration into multiple statements.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "function foo() { const bar = true; const baz = false; }",
            args: [2, "always"],
            ecmaFeatures: {
                blockBindings: true
            },
            errors: [{
                message: "Combine this with the previous 'const' statement.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "function foo() { const a = [1, 2, 3]; const [b, c, d] = a; }",
            ecmaFeatures: {
                destructuring: true,
                blockBindings: true
            },
            args: [2, "always"],
            errors: [{
                message: "Combine this with the previous 'const' statement.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
