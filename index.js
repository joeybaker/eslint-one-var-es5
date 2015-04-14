"use strict";

module.exports = {
  rules: {
    "one-var-es6": require("./rules/one-var-es6.js"),
    "one-let": require("./rules/one-let.js"),
    "one-const": require("./rules/one-const.js")
  },
  rulesConfig: {
    "one-var-es6": [1, "always"],
    "one-let": [1, "never"],
    "one-const": [1, "never"]
  }
};
