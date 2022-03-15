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

const takeUntil = function(array, callback) {
  const output = [];

  for (let x = 0; x < array.length; x++) {
    if (!callback(array[x])) {
      output.push(array[x]);
    } else {
      return output;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

const data3 = [true , true, true, true, false, true, true, false, true];
const results3 = takeUntil(data3, (x) => x === false);

const data4 = [10, 2, 5, 10];
const results4 = takeUntil(data4, (x) => x >= 10);

const data5 = [1, 2, 3, 4, 5];
const results5 = takeUntil(data5, (x) => x >= 5);


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [true, true, true, true]);
assertArraysEqual(results4, []);
assertArraysEqual(results5, [1, 2, 3, 4]);

module.exports = takeUntil;