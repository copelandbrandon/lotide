const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);//should print the true message
assertArraysEqual([5, 6, 7], [9, 8, 7]);//should print the false message
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);//should print the true message
assertArraysEqual([5, 6, 7], [5, 6, '7']);//should print the false message