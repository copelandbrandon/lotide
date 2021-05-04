const takeUntil = function(array, callback) {
  let resultsArr = [];
  //for all elements of array
  for (let elements of array) {
    //if callback given current element returns false
    if (!callback(elements)) {
      resultsArr.push(elements);
    } else {
      break;
    }
    
  }
  return resultsArr;
};

module.exports = takeUntil;
