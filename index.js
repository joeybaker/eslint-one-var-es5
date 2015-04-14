'use strict'

module.exports = {
  rules: {
    'one-var-es5': require('./rules/one-var-es5.js')
    , 'one-let': require('./lib/rules/one-let.js')
    , 'one-const': require('./lib/rules/one-const.js')
  }
  , rulesConfig: {
    'one-var-es5': [1, 'always']
    , 'one-var-es6': [2, 'never']
  }
}
