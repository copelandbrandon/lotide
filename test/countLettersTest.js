const assert = require('chai').assert;
const countLetters = require('../index').countLetters;

describe ('#countLetters', () => {

  it ('should return 4 for "this is my awesome test sentence" when looking for t', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['t'], 4);
  });
  
  it('should return 1 when passed the same sentence and looking for h', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['h'], 1);
  })
  
  it('should return 2 when passed the same sentence and looking for i', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['i'], 2);
  });
  
  it('should return 5 when passed the same sentence and looking for s', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['s'], 5);
  });
  
  it('should return 2 when passed the same sentence and looking for m', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['m'], 2);
  });
  
  it('should return 1 when passed the same sentence and looking for y', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj['y'], 1);
  });
  
  it('should return undefined when passed the same sentence but looking for blank spaces', () => {
    const resultObj = countLetters("this is my awesome test sentence");
    assert.equal(resultObj[' '], undefined);
  })

});