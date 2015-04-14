"use strict";

module.exports = {
  rules: {
    "one-var-es6": require("./rules/one-var-es6.js"),
    "one-let": require("./lib/rules/one-let.js"),
    "one-const": require("./lib/rules/one-const.js")
  },
  rulesConfig: {
    "one-var-es6": [1, "always"],
    "one-let": [1, "never"],
    "one-const": [1, "never"]
  }
};
