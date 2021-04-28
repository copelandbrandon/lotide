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

//define a middle function
const middle = function(array){
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 === 0){
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  }else {
    return [array[Math.floor(array.length / 2)]];
  }
};

assertArraysEqual(middle([1, 2, 3]), [2]);//should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);//should PASS
assertArraysEqual(middle([1]), []);//should PASS
assertArraysEqual(middle([1, 2]), []);//should PASS
//take in an array
//find the middle element/s
//arrays with 1 or 2 elements do not have a middle and should return empty arrays
//arrays with odd number of elements should return an array of 1 element
//arrays with even number of elements should return an array with 2 elements