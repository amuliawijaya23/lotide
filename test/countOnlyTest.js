const countOnly = require('../countOnly.js');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('should return {"Jason": 1, "Fang": 2} for countOnly(["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Faing", "Joe"], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false})', () => {
    const input1 = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const input2 = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};
    assert.deepEqual(countOnly(input1, input2), {"Jason": 1, "Fang": 2});
  });
});