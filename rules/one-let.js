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

    var blockStack = [];

    /**
     * Increments the blockStack counter.
     * @returns {void}
     * @private
     */
    function startBlock() {
        blockStack.push(false);
    }

    /**
     * Decrements the blockStack counter.
     * @returns {void}
     * @private
     */
    function endBlock() {
        blockStack.pop();
    }

    /**
     * Determines if there is more than one var statement in the current scope.
     * @returns {boolean} Returns true if it is the first var declaration, false if not.
     * @private
     */
    function hasOnlyOneVar() {
        if (blockStack[blockStack.length - 1]) {
            return true;
        } else {
            blockStack[blockStack.length - 1] = true;
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
            if (node.kind !== "let") {
                return;
            }

            var declarationCount = node.declarations.length;

            if (MODE === "never") {
                if (declarationCount > 1) {
                    context.report(node, "Split 'let' declaration into multiple statements.");
                }
            } else {
                if (hasOnlyOneVar()) {
                    context.report(node, "Combine this with the previous 'let' statement.");
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
