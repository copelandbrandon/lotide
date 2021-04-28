const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let noSpace = sentence.split(" ").join("");
  const returnObject = {};
  for (const letter of noSpace) {
    returnObject[letter] ? returnObject[letter] += 1 : returnObject[letter] = 1;
  }
  return returnObject;
};

const resultObj = countLetters("this is my awesome test sentence");

assertEqual(resultObj['t'], 4);
assertEqual(resultObj['h'], 1);
assertEqual(resultObj['i'], 2);
assertEqual(resultObj['s'], 5);
assertEqual(resultObj['m'], 2);
assertEqual(resultObj['y'], 1);
assertEqual(resultObj[' '], undefined);
console.log(resultObj);