const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};

//takes object
// takes callback
//scan object
//return first key that callback is truthy for
//if no key matches then should return undefined
let findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

assertEqual(findKey({
  'breathAtk': { dmg: 25 },
  'clawAtk':   { dmg: 15 },
  'biteAtk':   { dmg: 30 },
  'tailAtk':   { dmg: 10 }
}, x => x.dmg === 30), 'biteAtk'); // => biteAtk

assertEqual(findKey({
  'breathAtk': { dmg: 25 },
  'clawAtk':   { dmg: 15 },
  'biteAtk':   { dmg: 30 },
  'tailAtk':   { dmg: 10 }
}, x => x.dmg === 100), undefined); // => undefined