const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = function(firstArray, secondArray) {
  if ((eqArrays(firstArray, secondArray)) === true) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray} ✅`);
  } else {
    console.log(`Assertion Failed: ${firstArray} !== ${secondArray} 🛑`);
  }
};




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

const output = letterPositions('random words');

console.log(output);

assertArraysEqual(output['r'], [0, 9]);
assertArraysEqual(output['a'], [1]);
assertArraysEqual(output['n'], [2]);
assertArraysEqual(output['d'], [3, 10]);
assertArraysEqual(output['o'], [4, 8]);
assertArraysEqual(output['m'], [5]);
assertArraysEqual(output['w'], [7]);
assertArraysEqual(output['s'], [11]);

module.exports = letterPositions;