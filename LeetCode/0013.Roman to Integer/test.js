'use strict';

const assert = require('assert');

const { romanToInt } = require('./');

describe('#romanToInt', () => {
  const tests = [
    {
      s: 'III',
      result: 3,
    },
    {
      s: 'IV',
      result: 4,
    },
    {
      s: 'IX',
      result: 9,
    },
    {
      s: 'LVIII',
      result: 58,
    },
    {
      s: 'DCCCXCIX',
      result: 899,
    },
    {
      s: 'MCMXCIV',
      result: 1994,
    },
  ];

  for (const { s, result } of tests) {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(romanToInt(s), result);
    });
  }
});
