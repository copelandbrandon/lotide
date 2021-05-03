const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

// prior testing
// assertArraysEqual([1, 2, 3], [1, 2, 3]);//should print the true message
// assertArraysEqual([5, 6, 7], [9, 8, 7]);//should print the false message
// assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);//should print the true message
// assertArraysEqual([5, 6, 7], [5, 6, '7']);//should print the false message
module.exports = assertArraysEqual;
