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

const map = (array, callback) => {
  const output = [];

  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

const words = ["ground", "control", "to", "major", "tom"];

const result = map(words, (word) => word[0]);
const result2 = map(words, (word) => word + '123');

assertArraysEqual(result, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['ground123', 'control123', 'to123', 'major123', 'tom123']);