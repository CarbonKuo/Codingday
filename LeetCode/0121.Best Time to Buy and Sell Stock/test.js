'use strict';

const assert = require('assert');

const { maxProfit } = require('./');

describe('#maxProfit', () => {
  const tests = [
    {
      prices: [7, 1, 5, 3, 6, 4],
      result: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      result: 0,
    },
    {
      prices: [2, 4, 1],
      result: 2,
    },
  ];

  for (const { prices, result } of tests) {
    it(`${prices} -> ${result}`, () => {
      assert.deepStrictEqual(maxProfit(prices), result);
    });
  }
});
