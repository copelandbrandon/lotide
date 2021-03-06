const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};

// prior testing
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bingus", "Bingus");
// assertEqual(1, 17);

module.exports = assertEqual;