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

const without = function(array, remove) {
  const newArray = array.filter(function(element) {
    if (!remove.includes(element)) {
      return element;
    }
  })
    return newArray;
  };




console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 4, 6], [4, 6])) // => [1]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;