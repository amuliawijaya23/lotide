const findKey = function(object, callback){
  for (let keys in object) {
    if (callback(object[keys])){
      return keys;
    }
  }
  return undefined;
};

module.exports = findKey;