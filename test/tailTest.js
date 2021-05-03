const tail = require('../tail');
const assertEqual = require('../assertEqual');

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
console.log('Should log an empty array if input is an empty array:', tail(empty));

//testing an array with a single element returns an empty array
const singleElem = [1];
tail(singleElem);
console.log('Should log an empty array if input is single element array:', tail(singleElem));