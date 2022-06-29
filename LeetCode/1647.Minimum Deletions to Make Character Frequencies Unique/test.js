'use strict';

const assert = require('assert');

const { minDeletions } = require('./');

describe('#minDeletions', () => {
  const tests = [
    {
      s: 'aab',
      result: 0,
    },
    {
      s: 'aaabbbcc',
      result: 2,
    },
    {
      s: 'ceabaacb',
      result: 2,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(minDeletions(s), result);
    });
  }
});
