const without = function(array, value) {
  let subArray = [];
  array.forEach(function(elem) {
    if (value.includes(elem) === false) {
      subArray.push(elem);
    }
  });
  return subArray;
};

module.exports = without;
