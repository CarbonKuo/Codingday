'use strict';

const assert = require('assert');

const { findBottomLeftValue } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#findBottomLeftValue', () => {
  const tests = [
    {
      root: [2, 1, 3],
      result: 1,
    },
    {
      root: [1, 2, 3, 4, null, 5, 6, null, null, 7],
      result: 7,
    },
  ];

  makeTestTreeNodes(tests);

  for (const { root, result } of tests) {
    it(`${root} -> ${result}`, () => {
      assert.deepStrictEqual(findBottomLeftValue(root), result);
    });
  }
});
