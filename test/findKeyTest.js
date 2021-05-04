const findKey = require('../index').findKey;
const assert = require('chai').assert;

describe ('#findKey', () => {

  it('should return noma with the given object and value of 2', () => {
    assert.equal(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma'); // => "noma"
  });

  it('should return biteAtk with the given object and value of 30', () => {
    assert.equal(findKey({
      'breathAtk': { dmg: 25 },
      'clawAtk':   { dmg: 15 },
      'biteAtk':   { dmg: 30 },
      'tailAtk':   { dmg: 10 }
    }, x => x.dmg === 30), 'biteAtk'); // => biteAtk
  });

  it('should return undefined with the given object and value of 100', () => {
    assert.equal(findKey({
      'breathAtk': { dmg: 25 },
      'clawAtk':   { dmg: 15 },
      'biteAtk':   { dmg: 30 },
      'tailAtk':   { dmg: 10 }
    }, x => x.dmg === 100), undefined); // => undefined
  });

});



