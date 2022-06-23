'use strict';

const assert = require('assert');

const { majorityElement } = require('./');

describe('#majorityElement', () => {
  const tests = [
    {
      nums: [3, 2, 3],
      result: 3,
    },
    {
      nums: [2, 2, 1, 1, 1, 2, 2],
      result: 2,
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(majorityElement(nums), result);
    });
  }
});
