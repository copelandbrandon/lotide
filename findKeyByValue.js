const findKeyByValue = function(object, val) {
  for (let key in object) {
    if (object[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
