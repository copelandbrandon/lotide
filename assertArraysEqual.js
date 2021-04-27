const eqArrays = function(array1, array2) {
  if (array1.length > array2.length || array2.length > array1.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        if (array1[i] === array1.length) {
          return true;
        }
      } else {
        return false;
      }
    }
  }

};

const assertArraysEqual = function(actual, expected){

  if (actual === expected){
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);//should print the true message
assertArraysEqual(eqArrays([5, 6, 7], [9, 8, 7]), true);//should print the false message
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);//should print the false message
assertArraysEqual(eqArrays([5, 6, 7], [9, 8, 7]), false);//should print the true message
