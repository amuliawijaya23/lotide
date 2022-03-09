const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑`)
  }
};

const eqArrays = function(array1, array2) {
  for (x = 0; x < array1.length; x++) {
    if (array1[x] === array2[x]) {
      return true;
    } else {
      return false;
    }
  }
};







eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
