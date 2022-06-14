'use strict';

const assert = require('assert');

const { plusOne } = require('./');

describe('#plusOne', () => {
  const tests = [
    {
      digits: [1, 2, 3],
      result: [1, 2, 4],
    },
    {
      digits: [4, 3, 2, 1],
      result: [4, 3, 2, 2],
    },
    {
      digits: [9],
      result: [1, 0],
    },
  ];

  for (const { digits, result } of tests) {
    it(`${digits} -> ${result}`, () => {
      assert.deepStrictEqual(plusOne(digits), result);
    });
  }
});
