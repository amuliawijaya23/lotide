const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};


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
    
    




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cb = {a: "1", b: "4"}
const jb = {a: "2", b: "4"}
const jd = {a: "1", b: "2"}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cb, jb), false);
assertEqual(eqObjects(jb, jd), false);

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);