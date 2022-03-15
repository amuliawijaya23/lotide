const without = function(array, remove) {
  const newArray = array.filter(function(element) {
    if (!remove.includes(element)) {
      return element;
    }
  })
    return newArray;
  };

module.exports = without;