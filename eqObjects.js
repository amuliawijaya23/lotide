const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑`);
  }
};


const eqArrays = function(array1, array2) {
  let isEqual = false;
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        isEqual = true;
      } else {
        return false;
      }
    }
    return isEqual;
  } else {
    return false;
  }
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


console.log(eqObjects(ab, ba), 'true');
console.log(eqObjects(ab, abc), 'false');
console.log(eqObjects(cb, jb), 'false');
console.log(eqObjects(jb, jd), 'false');

console.log(eqObjects(cd, dc), 'true');
console.log(eqObjects(cd, cd2), 'false');