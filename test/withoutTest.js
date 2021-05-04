const without = require('../index').without;
const assert = require('chai').assert;

describe ('#without', () => {

  it ('should return hello world when given lighthouse as an argument', () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });

  it ('should return [1, 2] when given 3 as an argument', () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });

  it ('should return [6, 5] when given [1, 8] as an argument', () => {
    assert.deepEqual(without([6, 5, 8], [1, 8]), [6, 5]);
  });

  it('should not alter the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ['lighthouse']);
    assert.deepEqual(words, ['hello', 'world', 'lighthouse']);
  });

});
