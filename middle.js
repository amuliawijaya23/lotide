const middle = function (array) {
  const midIndex = Math.floor(array.length/2);
  const lastIndex = array.length -1;
  let output = [];
  if (array.length <= 2) {
    output = [];
  } else if (array.length % 2 !== 0) {
    output.push(array[midIndex]);
  } else if (array.length % 2 === 0) {
    for (i = midIndex - 1; i <= midIndex; i++) {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = middle;