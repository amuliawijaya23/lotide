const eqObjects = require('./eqObjects.js');

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