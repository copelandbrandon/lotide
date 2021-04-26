const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArr = [];
  tailArr = array.slice(1);
  return tailArr;
};

//checking that the tailArr is correct
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//checking that original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//checking to make sure an empty array still returns an empty array
const empty = [];
console.log(tail(empty));

//testing an array with a single element returns an empty array
const singleElem = [1];
tail(singleElem);
console.log(tail(singleElem));