'use strict';

const assert = require('assert');

const { firstMissingPositive } = require('./');

describe('#firstMissingPositive', () => {
  const tests = [
    {
      nums: [1, 2, 0],
      result: 3,
    },
    {
      nums: [3, 4, -1, 1],
      result: 2,
    },
    {
      nums: [7, 8, 9, 11, 12],
      result: 1,
    },
    {
      nums: [1],
      result: 2,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(firstMissingPositive(nums), result);
    });
  }
});
