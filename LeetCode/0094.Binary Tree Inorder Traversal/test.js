'use strict';

const assert = require('assert');

const { inorderTraversal } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#inorderTraversal', () => {
  const tests = [
    {
      root: [1, null, 2, 3],
      result: [1, 3, 2],
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7],
      result: [4, 2, 5, 1, 6, 3, 7],
    },
    {
      root: [],
      result: [],
    },
    {
      root: [1],
      result: [1],
    },
  ];

  makeTestTreeNodes(tests);

  for (const { root, result } of tests) {
    it(`${root} -> ${result}`, () => {
      assert.deepStrictEqual(inorderTraversal(root), result);
    });
  }
});
