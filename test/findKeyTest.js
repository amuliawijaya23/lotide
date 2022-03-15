const findKey = require('../findKey.js');
const assert = require('chai').assert;


describe('#findKey', () => {
  it('should return the key "noma" when given {"Blue Hill": {stars: 1}, "Akaleri": {stars: 3}, "noma": {stars: 2}, "elBulli": {stars: 3}, "Ora": {stars: 2}, "Akelarre": {stars: 3}} and callback x = 2', () => {
    const input = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    expectedOutput = 'noma';

    assert.strictEqual(findKey(input, x => x.stars === 2), 'noma');
  });

  it('should return "runnerup" when given {"winner": "redbull, "runnerup": "mercedes", "thirdPlace": "ferrari"} and callback x = "mercedes"', () => {
    const input = {"winner": "redbull", "runnerup": "mercedes", "thirdPlace": "ferrari"};
    const expectedOutput = "runnerup";
    assert.strictEqual(findKey(input, x => x === "mercedes"), "runnerup");
  });
});