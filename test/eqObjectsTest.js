const eqObjects = require('../eqObjects.js');
const assert = require('chai').assert;


describe('eqObjects', () => {
  it('returns true if both objects are equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('returns false if 2 objects are not equal', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
});