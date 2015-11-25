/**
 * Evernote custom eslint plugin
 */
'use strict';

module.exports = {
  rules: {
    'no-only': require('./lib/rules/no-only')
  },
  rulesConfig: {
    'no-only': 0
  }
};
