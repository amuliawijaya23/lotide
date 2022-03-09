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

console.log(eqArrays([1,2,3], [1,2,3]));
console.log(eqArrays([1,2,3], [1,2,'3']));

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3,4]);
assertArraysEqual([1,2,3], [1,2,'3']);