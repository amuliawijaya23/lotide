const findKeyByValue = require('../findKeyByValue.js');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('should return "sci_fi" when given {"sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama": "The Wire"} and value "The Expanse"', () => {
    const input = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expectedOutput = "sci_fi";
    assert.strictEqual(findKeyByValue(input, "The Expanse"), "sci_fi");
  });

  it('should return "drama" when given {"sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama": "The Wire"} and value "The Wire"', () => {
    const input = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expectedOutput = "drama";
    assert.strictEqual(findKeyByValue(input, "The Wire"), "drama");
  });

  it('should return "comedy" when given {"sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama": "The Wire"} and value "Brooklyn Nine-Nine"', () => {
    const input = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const expectedOutput = "comedy";
    assert.strictEqual(findKeyByValue(input, "Brooklyn Nine-Nine"), "comedy");
  });
});