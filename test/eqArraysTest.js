const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;


describe('#eqArrays', () => {
  it('should return true if both arrays are equal', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false if 2 arrays are not strictly equal', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
  });
});