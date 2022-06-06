'use strict';

const assert = require('assert');

const { removeElement } = require('./');

describe('#removeElement', () => {
  const tests = [
    {
      nums: [],
      val: 0,
      result: 0,
      result2: [],
    },
    {
      nums: [3, 2, 2, 3],
      val: 3,
      result: 2,
      result2: [2, 2],
    },
    {
      nums: [1, 1, 1],
      val: 1,
      result: 0,
      result2: [],
    },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      result: 5,
      result2: [0, 1, 3, 0, 4],
    },
  ];

  for (const { nums, val, result, result2 } of tests) {
    it(`${nums}, ${val} -> ${result2}`, () => {
      assert.deepStrictEqual(removeElement(nums, val), result);
      assert.deepEqual(nums, result2);
    });
  }
});
