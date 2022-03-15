const flatten = function (inputs) {
  let output = [];
  for (input of inputs) {
    if (!Array.isArray(input)) {
      output.push(input);
    } else {
      for (let elements of input) {
        output.push(elements);
      }
    }
  }
  return output;
};

module.exports = flatten;