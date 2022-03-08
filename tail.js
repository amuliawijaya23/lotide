const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Test case 1: Check element or the new array
const result = tail([1,2,3,4,5]);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);


// Test case 2: Check element of original array
const resultTwo = [10,9,8,7,6,5];
tail(resultTwo);
assertEqual(resultTwo.length, 6);

// Test Case 3: Array with one element
const resultThree = [1];
console.log(tail(resultThree));

// Test Case 4: Empty array
const resultFour = [];
console.log(tail(resultFour));
