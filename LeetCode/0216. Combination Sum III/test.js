'use strict';

const assert = require('assert');

const { combinationSum3 } = require('.');

describe('#combinationSum3', () => {
  const tests = [
    {
      k: 3,
      n: 7,
      result: [[1, 2, 4]],
    },
    {
      k: 3,
      n: 9,
      result: [
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4],
      ],
    },
    {
      k: 4,
      n: 1,
      result: [],
    },
  ];

  for (const { k, n, result } of tests) {
    it(`k = ${k}, n = ${n}  -> ${result}`, () => {
      assert.deepStrictEqual(combinationSum3(k, n), result);
    });
  }
});
