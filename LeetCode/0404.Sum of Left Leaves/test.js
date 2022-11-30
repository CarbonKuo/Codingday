'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sumOfLeftLeaves } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumOfLeftLeaves', () => {
  const tests = [
    {
      root: [3, 9, 20, null, null, 15, 7],
      result: 24,
    },
    {
      root: [1],
      result: 0,
    },
    {
      root: [0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8],
      result: 5,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumOfLeftLeaves(root), result);
    });
  });
});
