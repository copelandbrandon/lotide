const letterPositions = require('../index').letterPositions;
const assert = require('chai').assert;

describe ('#letterPositions', () => {

  it ('should return [0] when looking for h in hello', () => {
    const test1 = letterPositions('hello');
    assert.deepEqual(test1['h'], [0]);
  });

  it ('should return [1] when looking for e in hello', () => {
    const test1 = letterPositions('hello');
    assert.deepEqual(test1['e'], [1]);
  });

  it ('should return [2, 3] when looking for l in hello', () => {
    const test1 = letterPositions('hello');
    assert.deepEqual(test1['l'], [2, 3]);
  });

  it ('should return [4] when looking for o in hello', () => {
    const test1 = letterPositions('hello');
    assert.deepEqual(test1['o'], [4]);
  });
});
