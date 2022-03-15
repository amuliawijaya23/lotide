const countLetters = function(string) {
  const newString = string.split(' ').join('').toLowerCase();
  const output = {};

  for (const letter of newString) {
    if(output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;