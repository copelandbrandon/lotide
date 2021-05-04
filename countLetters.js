const countLetters = function(sentence) {
  let noSpace = sentence.split(" ").join("");
  const returnObject = {};
  for (const letter of noSpace) {
    returnObject[letter] ? returnObject[letter] += 1 : returnObject[letter] = 1;
  }
  return returnObject;
};

module.exports = countLetters;