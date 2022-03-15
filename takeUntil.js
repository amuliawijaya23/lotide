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

module.exports = takeUntil;