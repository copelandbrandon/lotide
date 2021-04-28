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

const letterPositions = function(sentence){
  let lower = sentence.toLowerCase();
  const results = {};
  for (let char of lower){
    results[char] = [];
    for (let i = 0; i < lower.length; i++){
      if (lower[i] === char){
        results[char].push(i)
      }
    }
  }
  return results;
}
console.log(letterPositions("This is a great test sentence"));
const test1 = letterPositions('hello');
assertArraysEqual(test1['h'], [0]);
assertArraysEqual(test1['e'], [1]);
assertArraysEqual(test1['l'], [2, 3]);
assertArraysEqual(test1['o'], [4]);
//need to update the results array