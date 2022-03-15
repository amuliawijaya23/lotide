const countLetters = require('../countLetter.js');
const assert = require('chai').assert;


describe('#countLetters', () => {
  it('should return {"l": 1, "i": 2, "g": 1, "h": 4, "t": 2, "o": 2, "u": 2, "s": 2, "e": 3, "n": 1} for "Lighthouse in the House', () => {
    const inputName = 'Lighthouse in the House';
    const expectedOutput = {"l": 1, "i": 2, "g": 1, "h": 4, "t": 2, "o": 2, "u": 2, "s": 2, "e": 3, "n": 1};
    assert.deepEqual(countLetters(inputName), expectedOutput);
  });
});