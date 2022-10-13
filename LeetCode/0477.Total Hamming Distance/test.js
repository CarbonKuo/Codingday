'use strict';

const assert = require('assert');

const { totalHammingDistance } = require('./');

describe('#totalHammingDistance', () => {
  const tests = [
    {
      nums: [4, 14, 2],
      result: 6,
    },
    {
      nums: [4, 14, 4],
      result: 4,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(totalHammingDistance(nums), result);
    });
  }
});
