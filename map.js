// will take two args
//1 array
//2 callback
const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);
// console.log(results1);

//will return length of elements in the new array
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);//should PASS
//will return index values as the new array
assertArraysEqual(map(words, word => words.indexOf(word)), [0, 1, 2, 3, 4]);//should PASS
//will return first letter of each element
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);//should PASS
//will return last letter of each element
assertArraysEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);//should PASS