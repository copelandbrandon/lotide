const map = require('../index').map;
const assert = require('chai').assert;

describe ('#map', () => {

  it ('should return the length of element in a new array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

  it('should return index values as a new array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => words.indexOf(word)), [0, 1, 2, 3, 4]);
  });

  it('should return the first letter of each element', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it('should return the last letter of each element', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[word.length - 1]), ['d', 'l', 'o', 'r', 'm']);
  });

});