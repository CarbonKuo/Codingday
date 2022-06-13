'use strict';

const assert = require('assert');

const { coinChange } = require('./');

describe('#coinChange', () => {
  const tests = [
    {
      coins: [1, 2, 5],
      amount: 11,
      result: 3,
    },
    {
      coins: [2],
      amount: 3,
      result: -1,
    },
    {
      coins: [1],
      amount: 0,
      result: 0,
    },
    {
      coins: [186, 419, 83, 408],
      amount: 6249,
      result: 20,
    },
  ];

  for (const { coins, amount, result } of tests) {
    it(`${coins}, ${amount} -> ${result}`, () => {
      assert.deepStrictEqual(coinChange(coins, amount), result);
    });
  }
});
