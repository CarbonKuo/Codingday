'use strict';

const assert = require('assert');

const { merge } = require('./');

describe('#merge', () => {
  const tests = [
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
      result: [1, 2, 2, 3, 5, 6],
    },
    {
      nums1: [1],
      m: 1,
      nums2: [],
      n: 0,
      result: [1],
    },
    {
      nums1: [],
      m: 0,
      nums2: [1],
      n: 1,
      result: [1],
    },
  ];

  for (const { nums1, m, nums2, n, result } of tests) {
    it(`${nums1}, ${m}, ${nums2}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(merge(nums1, m, nums2, n), result);
    });
  }
});
