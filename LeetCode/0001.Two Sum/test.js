'use strict';

const assert = require('assert');
const { result } = require('lodash');

const { twoSum } = require('.');

describe('#twoSum', () => {
  const tests = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
      result: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      result: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      result: [0, 1],
    },
  ];

  for (const { nums, target, result } of tests) {
    it(`${nums}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(twoSum(nums, target), result);
    });
  }
});
