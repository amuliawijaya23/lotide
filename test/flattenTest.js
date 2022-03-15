const flatten = require('../flatten.js');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return [1, 2, 3, 4] for [1, [2, 3], 4]', () => {
    const input = [1, [2, 3], 4];
    const expectedOutput = [1, 2, 3, 4];
    assert.deepEqual(flatten(input), expectedOutput);
  });

  it('should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expectedOutput);
  });
});