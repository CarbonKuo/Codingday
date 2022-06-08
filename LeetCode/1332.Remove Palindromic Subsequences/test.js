'use strict';

const assert = require('assert');

const { removePalindromeSub } = require('./');

describe('#removePalindromeSub', () => {
  const tests = [
    {
      s: 'ababa',
      result: 1,
    },
    {
      s: 'abb',
      result: 2,
    },
    {
      s: 'baabb',
      result: 2,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(removePalindromeSub(s), result);
    });
  }
});
