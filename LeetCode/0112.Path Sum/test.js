'use strict';

const assert = require('assert');

const { hasPathSum } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#hasPathSum', () => {
  const tests = [
    {
      root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
      targetSum: 22,
      result: true,
    },
    {
      root: [1, 2, 3],
      targetSum: 5,
      result: false,
    },
    {
      root: [1, 2, 3],
      targetSum: 4,
      result: true,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, targetSum, result } of tests) {
    it(`${root}, ${targetSum} -> ${result}`, () => {
      assert.deepStrictEqual(hasPathSum(root, targetSum), result);
    });
  }
});
