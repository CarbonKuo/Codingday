'use strict';

const assert = require('assert');

const { lengthOfLastWord } = require('./');

describe('#lengthOfLastWord', () => {
  const tests = [
    {
      s: 'Hello World',
      result: 5,
    },
    {
      s: '   fly me   to   the moon  ',
      result: 4,
    },
    {
      s: 'luffy is still joyboy',
      result: 6,
    },
    {
      s: 'a',
      result: 1,
    },
    {
      s: 'a ',
      result: 1,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(lengthOfLastWord(s), result);
    });
  }
});
