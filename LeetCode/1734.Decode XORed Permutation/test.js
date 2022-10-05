'use strict';

const assert = require('assert');

const { decode } = require('./');

describe('#decode', () => {
  const tests = [
    {
      encoded: [3, 1],
      result: [1, 2, 3],
    },
    {
      encoded: [6, 5, 4, 6],
      result: [2, 4, 1, 5, 3],
    },
  ];

  for (const { encoded, result } of tests) {
    it(`${encoded} -> ${result}`, () => {
      assert.deepStrictEqual(decode(encoded), result);
    });
  }
});
