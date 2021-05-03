const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 1, 3], [1, 1, 1, 1]), false);// => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 4, 2]), false);// => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => should PASS
assertEqual(eqArrays(['1', '2', '3'], [1, 2, 3]), false);// => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 8]), true);// => should FAIL
assertEqual(eqArrays([5, 6, 7, 8, 9,], ['5', '6', 7, 8, 'nine']), true);// => should FAIL