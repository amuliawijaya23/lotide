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

const eqObjects = function(firstObject, secondObject) {
  const firstObjectKeys = Object.keys(firstObject);
  const secondObjectKeys = Object.keys(secondObject);
 
  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  } 
  for (let key in firstObject) {
    if (Array.isArray(firstObject[key]) === false) {
      if (firstObject[key] !== secondObject[key]) return false;
    } else if (Array.isArray(firstObject[key]) === true){
      if (eqArrays(firstObject[key], secondObject[key]) === false) return false;
    }    
  }
  return true;
};

const assertObjectsEqual = function (objectOne, objectTwo) {
  const inspect = require('util').inspect;
  if ((eqObjects(objectOne, objectTwo)) === true) {
    console.log(`Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)} ✅`);
  } else {
    console.log(`Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)} 🛑`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

module.exports = assertObjectsEqual;