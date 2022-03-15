const eqArrays = require('./eqArrays.js');

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
    
module.exports = eqObjects;