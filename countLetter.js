const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

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

const words = 'Lighthouse in the House';
const result = countLetters(words);

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);

module.exports = countLetters;