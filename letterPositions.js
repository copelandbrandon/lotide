const letterPositions = function(sentence){
  let lower = sentence.toLowerCase();
  const results = {};
  for (let char of lower){
    results[char] = [];
    for (let i = 0; i < lower.length; i++){
      if (lower[i] === char){
        results[char].push(i)
      }
    }
  }
  return results;
};

module.exports = letterPositions;
