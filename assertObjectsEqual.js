const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
      
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {

      let result = eqArrays(obj1[key], obj2[key]);
      return result;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
    
  return true;
};

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