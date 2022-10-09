'use strict';

const assert = require('assert');

const { numMagicSquaresInside } = require('./');

describe('#numMagicSquaresInside', () => {
  const tests = [
    {
      grid: [
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2],
      ],
      result: 1,
    },
    {
      grid: [[8]],
      result: 0,
    },
  ];

  for (const { grid, result } of tests) {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(numMagicSquaresInside(grid), result);
    });
  }
});
