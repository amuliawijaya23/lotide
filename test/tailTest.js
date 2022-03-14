const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

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
const resultThree = tail([1]);
assertEqual(resultThree.length, 0);

// Test Case 4: Empty array
const resultFour = tail([]);
assertEqual(resultFour.length, 0);