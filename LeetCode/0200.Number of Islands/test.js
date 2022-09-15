'use strict';

const assert = require('assert');
const { result } = require('lodash');

const { numIslands } = require('./');

describe('#numIslands', () => {
  const tests = [
    {
      grid: [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
      result: 1,
    },
    {
      grid: [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ],
      result: 3,
    },
    {
      grid: [['1', '0', '1', '1', '0', '1', '1']],
      result: 3,
    },
  ];

  for (const { grid, result } of tests) {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(numIslands(grid), result);
    });
  }
});
