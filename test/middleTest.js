const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('chai').assert;



assertArraysEqual(middle(['hello', 'world', 'and', 3, 4, 'bye']),['and', 3]);

describe('#middle', () => {
  it('returns [] for [1]', () => {
    const inputName = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns [] for [1, 2]', () => {
    const inputName = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns [2] for [1, 2, 3]', () => {
    const inputName = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    const inputName = [1, 2, 3, 4, 5];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const inputName = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    const inputName = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [3, 4];
    assert.deepEqual(middle(inputName), expectedOutput);
  });

  it('returns ["and", 3] for ["hello", "world", "and", 3, 4, "bye"]', () => {
    const inputName = ["hello", "world", "and", 3, 4, "bye"];
    const expectedOutput = ["and", 3];
    assert.deepEqual(middle(inputName), expectedOutput);
  });
});