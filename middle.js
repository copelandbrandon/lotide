const middle = function(array){
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 === 0){
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  }else {
    return [array[Math.floor(array.length / 2)]];
  }
};

// prior testing
// assertArraysEqual(middle([1, 2, 3]), [2]);//should PASS
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);//should PASS
// assertArraysEqual(middle([1]), []);//should PASS
// assertArraysEqual(middle([1, 2]), []);//should PASS

module.exports = middle;