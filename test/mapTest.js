const map = require('../map.js');
const assert = require('chai').assert;


describe('#map', () => {
  it('should return ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"] and callback x[0]', () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const expectedOutput = ["g", "c", "t", "m", "t"];
    assert.deepEqual(map(input, x => x[0]), expectedOutput);
  });

  it('should return ["ground123", "control123", "to123", "major123", "tom123"] for ["ground", "control", "to", "major", "tom"] and callback x[0]', () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const expectedOutput = ["ground123", "control123", "to123", "major123", "tom123"];
    assert.deepEqual(map(input, x => x + '123'), expectedOutput);
  });
});