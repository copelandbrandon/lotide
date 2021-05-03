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


// prior testing
// assertEqual(eqArrays([1, 1, 3], [1, 1, 1, 1]), false);// => should PASS
// assertEqual(eqArrays([1, 2, 4], [1, 4, 2]), false);// => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => should PASS
// assertEqual(eqArrays(['1', '2', '3'], [1, 2, 3]), false);// => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 8]), true);// => should FAIL
// assertEqual(eqArrays([5, 6, 7, 8, 9,], ['5', '6', 7, 8, 'nine']), true);// => should FAIL
module.exports = eqArrays;