'use strict';

const assert = require('assert');

const { minIncrementForUnique } = require('./');

describe('#minIncrementForUnique', () => {
  const tests = [
    {
      nums: [1, 2, 2],
      result: 1,
    },
    {
      nums: [3, 2, 1, 2, 1, 7],
      result: 6,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(minIncrementForUnique(nums), result);
    });
  }
});
