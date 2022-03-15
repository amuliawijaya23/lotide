const without = require('../without.js');
const assert = require('chai').assert;




describe('#without', () => {
  it('should return [2, 3] when given [1, 2, 3] and [1]', () => {
    const input1 = [1, 2, 3];
    const input2 = [1];
    assert.deepEqual(without(input1, input2), [2, 3]);
  });

  it('should return ["1", "2"] when given ["1", "2", "3"] and [1, 2, "3"]', () => {
    const input1 = ["1", "2", "3"];
    const input2 = [1, 2, "3"];
    assert.deepEqual(without(input1, input2), ["1", "2"]);
  });

  it('should return ["hello", "world"] when given ["hello", "world", "lighthouse"] and ["lighthouse"]', () => {
    const input1 = ["hello", "world", "lighthouse"];
    const input2 = ["lighthouse"];
    assert.deepEqual(without(input1, input2), ["hello", "world"]);
  });
});