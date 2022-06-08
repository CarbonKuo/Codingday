'use strict';

const assert = require('assert');

const { maxSubArray } = require('./');

describe('#maxSubArray', () => {
  const tests = [
    {
      nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      result: 6,
    },
    {
      nums: [1],
      result: 1,
    },
    {
      nums: [5, 4, -1, 7, 8],
      result: 23,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(maxSubArray(nums), result);
    });
  }
});
