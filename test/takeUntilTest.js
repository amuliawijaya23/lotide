const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('should return [1, 2, 5, 7, 2] for takeUntil(input, x => x < 0)', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data1, x => x < 0);
    assert.deepEqual(results, [1, 2, 5, 7, 2]);
  });

  it('should return ["I\'ve", "been", "to", "Hollywood"] for takeUntil(input, x => x === ",")', () => {
    const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = takeUntil(data1, x => x === ',');
    assert.deepEqual(results, ["I\'ve", "been", "to", "Hollywood"]);
  });

  it('should return [true, true, true, true] for takeUntil(input, x => x === false)', () => {
    const data1 = [true , true, true, true, false, true, true, false, true];
    const results = takeUntil(data1, x => x === false);
    assert.deepEqual(results, [true, true, true, true]);
  });
});
