'use strict';

const assert = require('assert');

const { champagneTower } = require('./');

describe('#champagneTower', () => {
  const tests = [
    {
      poured: 1,
      query_row: 1,
      query_glass: 1,
      result: 0.0,
    },
    {
      poured: 2,
      query_row: 1,
      query_glass: 1,
      result: 0.5,
    },
    {
      poured: 100000009,
      query_row: 33,
      query_glass: 17,
      result: 1.0,
    },
  ];

  for (const { poured, query_row, query_glass, result } of tests) {
    it(`${poured}, ${query_row}, ${query_glass} -> ${result}`, () => {
      assert.deepStrictEqual(champagneTower(poured, query_row, query_glass), result);
    });
  }
});
