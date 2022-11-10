'use strict';

const assert = require('assert');
const _ = require('lodash');
const { intToRoman } = require('./');

describe('#intToRoman', () => {
  const tests = [
    {
      num: 3,
      result: 'III',
    },
    {
      num: 9,
      result: 'IX',
    },
    {
      num: 58,
      result: 'LVIII',
    },
    {
      num: 899,
      result: 'DCCCXCIX',
    },
    {
      num: 1994,
      result: 'MCMXCIV',
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.deepStrictEqual(intToRoman(num), result);
    });
  });
});
