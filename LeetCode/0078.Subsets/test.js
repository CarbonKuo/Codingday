'use strict';

const assert = require('assert');

const { subsets } = require('./');

describe('#subsets', () => {
  const tests = [
    {
      nums: [1, 2, 3],
      result: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
    },
    {
      nums: [0],
      result: [[], [0]],
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(subsets(nums), result);
    });
  }
});
