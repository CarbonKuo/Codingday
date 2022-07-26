'use strict';

const assert = require('assert');

const { getConcatenation } = require('./');

describe('#getConcatenation', () => {
  const tests = [
    {
      nums: [1, 2, 1],
      result: [1, 2, 1, 1, 2, 1],
    },
    {
      nums: [1, 3, 2, 1],
      result: [1, 3, 2, 1, 1, 3, 2, 1],
    },
  ];

  for (const { nums, result } of tests) {
    it(`${nums} -> ${result}`, () => {
      assert.deepStrictEqual(getConcatenation(nums), result);
    });
  }
});
