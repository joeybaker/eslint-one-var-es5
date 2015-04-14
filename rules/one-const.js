/**
 * @fileoverview A rule to ensure the use of a single variable declaration.
 * @author Ian Christian Myers
 * @copyright 2015 Joey Baker. All rights reserved.
 * @copyright 2015 Danny Fritz. All rights reserved.
 * @copyright 2013 Ian Christian Myers. All rights reserved.
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var MODE = context.options[0] || "never";

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    var functionStack = [];

    /**
     * Increments the functionStack counter.
     * @returns {void}
     * @private
     */
    function startBlock() {
        functionStack.push(false);
    }

    /**
     * Decrements the functionStack counter.
     * @returns {void}
     * @private
     */
    function endBlock() {
        functionStack.pop();
    }

    /**
     * Determines if there is more than one var statement in the current scope.
     * @returns {boolean} Returns true if it is the first var declaration, false if not.
     * @private
     */
    function hasOnlyOneVar() {
        if (functionStack[functionStack.length - 1]) {
            return true;
        } else {
            functionStack[functionStack.length - 1] = true;
            return false;
        }
    }

    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
        "Program": startBlock,
        "FunctionDeclaration": startBlock,
        "FunctionExpression": startBlock,
        "ArrowFunctionExpression": startBlock,
        "BlockStatement": startBlock,

        "VariableDeclaration": function(node) {
            // do not apply to let and const delclarations
            if (node.kind !== "const") {
                return;
            }

            var declarationCount = node.declarations.length;

            if (MODE === "never") {
                if (declarationCount > 1) {
                    context.report(node, "Split 'const' declaration into multiple statements.");
                }
            } else {
                if (hasOnlyOneVar()) {
                    context.report(node, "Combine this with the previous 'const' statement.");
                }
            }
        },

        "BlockStatement:exit": endBlock,
        "Program:exit": endBlock,
        "FunctionDeclaration:exit": endBlock,
        "FunctionExpression:exit": endBlock,
        "ArrowFunctionExpression:exit": endBlock
    };

};
