'use strict';

const assert = require('assert');

const { mySqrt } = require('./');

describe('#mySqrt', () => {
  const tests = [
    {
      x: 4,
      result: 2,
    },
    {
      x: 8,
      result: 2,
    },
  ];

  for (const { x, result } of tests) {
    it(`${x} -> ${result}`, () => {
      assert.deepStrictEqual(mySqrt(x), result);
    });
  }
});
