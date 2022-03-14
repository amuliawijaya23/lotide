const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual(middle([1]), []); // ==> []
assertArraysEqual(middle([1, 2]), []);  // ==> []

assertArraysEqual(middle([1, 2, 3]), [2]); // ==> [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // ==> [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // ==> [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);  // ==> [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([7, 10, 20]),[10]);
assertArraysEqual(middle(['hello', 'world', 'and', 3, 4, 'bye']),['and', 3]);