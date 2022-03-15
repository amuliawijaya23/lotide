const letterPositions = require('../letterPositions.js');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it('should return {"r": [0, 9], "a": [1], "n": [2], "d": [3, 10], "o": [4, 8], "m": [5], "w": [7], "s": [11]} for "random words"', () => {
    const input = "random words";
    const expectedOutput = {"r": [0, 9], "a": [1], "n": [2], "d": [3, 10], "o": [4, 8], "m": [5], "w": [7], "s": [11]};
    assert.deepEqual(letterPositions(input), expectedOutput);
  });
});