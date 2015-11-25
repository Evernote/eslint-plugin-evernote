/**
 * Rule to disallow:
 *  describe.only
 *  describeSuite.only
 *  it.only
 */
'use strict';

var functionsWhichMayHaveOnly = new Set([
  'describe',
  'describeSuite',
  'it'
]);

module.exports = function(context) {
  return {
    'Identifier': function(node) {
      if (functionsWhichMayHaveOnly.has(node.name)) {
        var parent = node.parent;
        if (parent.type === 'MemberExpression') {
          var parentProperty = parent.property;
          if (parentProperty.name === 'only') {
            context.report({
              node: node,
              message: node.name + '.only not allowed'
            });
          }
        }
      }
    }
  };
};
