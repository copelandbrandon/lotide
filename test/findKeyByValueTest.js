const findKeyByValue = require('../index').findKeyByValue;
const assert = require('chai').assert;

describe('#findKeyByValue', () => {

  it('should return the drama when looking for the wire', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined when looking for that 70s show', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('should return comedy when searching for Brooklyn Nine-Nine', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
  });

});
