const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c:3}, {a: 1, b: 2, c:3});//should PASS
assertObjectsEqual({a: 2, b: 3, c: 4}, {a: 5, b: 6, c: 7});//should FAIL
assertObjectsEqual({a: 1, b: 2, c:[3, 2]}, {a: 1, b: 2, c:[3, 2]});//should PASS

module.exports = assertObjectsEqual;