const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    const inputName = [1, 2, 3, 4, 5];
    const expectedOutput = [2, 3, 4, 5];
    assert.deepEqual(tail(inputName), expectedOutput);
  });

  it('returns 6 for length of [1, 2, 3, 4, 5, 6] after calling tail([1, 2, 3, 4, 5, 6])', () => {
    const inputName = [1, 2, 3, 4, 5, 6];
    expectedOutput = 6;
    tail(inputName);
    assert.strictEqual(inputName.length, 6);
  });

  it('returns [] for [1]', () => {
    const inputName = [1];
    const expectedOutput = [];
    assert.deepEqual(tail(inputName), expectedOutput);
  });

  it('returns [] for []', () => {
    const inputName = [];
    const expectedOutput = [];
    assert.deepEqual(tail(inputName), expectedOutput);
  });
});