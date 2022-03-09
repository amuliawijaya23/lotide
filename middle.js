const eqArrays = function(array1, array2) {
  let isEqual = false;
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
    return isEqual;
  } else {
    return false;
  }
};



const assertArraysEqual = function(firstArray, secondArray) {
  if ((eqArrays(firstArray, secondArray)) === true) {
    console.log(`Assertion Passed: ${firstArray} === ${secondArray} ✅`);
  } else {
    console.log(`Assertion Failed: ${firstArray} !== ${secondArray} 🛑`);
  }
};

const middle = function (array) {
  const midIndex = Math.floor(array.length/2);
  const lastIndex = array.length -1;
  let output = [];
  if (array.length <= 2) {
    output = [];
  } else if (array.length % 2 !== 0) {
    output.push(array[midIndex]);
  } else if (array.length % 2 === 0) {
    for (i = midIndex - 1; i <= midIndex; i++) {
      output.push(array[i]);
    }
  }
  return output;
}

console.log(middle([1])); // ==> []
console.log(middle([1, 2]));  // ==> []

console.log('------------------------');

console.log(middle([1, 2, 3])); // ==> [2]
console.log(middle([1, 2, 3, 4, 5])); // ==> [3]

console.log('------------------------');

console.log(middle([1, 2, 3, 4]));  // ==> [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));  // ==> [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([7, 10, 20]),[10]);
assertArraysEqual(middle(['hello', 'world', 'and', 3, 4, 'bye']),['and', 3]);