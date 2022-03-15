const letterPositions = function(sentence) {
  const result = {};

  for (const letter in sentence) {
    if (sentence[letter] !== ' '){
      if (!result[sentence[letter]]) {
        result[sentence[letter]] = [];
      }
      result[sentence[letter]].push(Number(letter));
    }
  }
  return result;
};

module.exports = letterPositions;