const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);//should print the true message
assertArraysEqual([5, 6, 7], [9, 8, 7]);//should print the false message
assertArraysEqual([1, 2, 3], [1, 2, 3]);//should print the false message
assertArraysEqual([5, 6, 7], [9, 8, 7]);//should print the true message
