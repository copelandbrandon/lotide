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
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const without = function(array, value) {
  let subArray = [];
  array.forEach(function(elem) {
    if (value.includes(elem) === false) {
      subArray.push(elem);
    }
  });
  return subArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([6, 5, 8], [1, 8]), [6, 5]);