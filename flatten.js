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



console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]