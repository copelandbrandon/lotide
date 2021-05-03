const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {

  it ('should return [Lighthouse, labs] for [Hello, Lighthouse, Labs]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');
    assert.strictEqual(result[1], "Labs");
  });

  it ('should not alter the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ['Yo Yo', 'Lighthouse', 'Labs']);
  });

  it ('should return an empty array for []', () => {
    const empty = [];
    assert.deepEqual(tail(empty), []);
  });

  it ('should return an empty array for [1]', () => {
    const singleElem = [1];
    assert.deepEqual(tail(singleElem), []);
  });
});