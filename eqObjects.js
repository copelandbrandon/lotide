const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } 
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
        return false;
    }
  }
  return true;
};
//take in two objects
//return boolean value based on perfect match
// objects are equal when they have same # of keys
//& value of key in one object is the same as value of key in the other
const eqObjects = function(obj1, obj2){
  if (Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
    for (let key in obj1){
      
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])){

        let result = eqArrays(obj1[key], obj2[key]);
        return result;
      } else if (obj1[key] !== obj2[key]){
          return false;
        } 
      }
    
    return true;
};





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abcd = { a:'2', b: '2' };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(ab, abcd), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
