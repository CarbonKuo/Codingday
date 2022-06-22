'use strict';

const assert = require('assert');
const { result } = require('lodash');

const { singleNumber } = require('./');

describe('#singleNumber', () => {
  const tests = [
    {
      nums: [2, 2, 1],
      result: 1,
    },
    {
      nums: [4, 1, 2, 1, 2],
      result: 4,
    },
    {
      nums: [1],
      result: 1,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(singleNumber(nums), result);
    });
  }
});
