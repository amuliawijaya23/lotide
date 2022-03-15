const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(firstArray, secondArray) {
  if ((eqArrays(firstArray, secondArray)) === true) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray} ✅`);
  } else {
    console.log(`Assertion Failed: ${firstArray} !== ${secondArray} 🛑`);
  }
};


assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3,4]);
assertArraysEqual([1,2,3], [1,2,'3']);

module.exports = assertArraysEqual;