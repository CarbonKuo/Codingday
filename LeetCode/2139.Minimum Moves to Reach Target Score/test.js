'use strict';

const assert = require('assert');

const { minMoves } = require('./');

describe('#minMoves', () => {
  const tests = [
    {
      target: 5,
      maxDoubles: 0,
      result: 4,
    },
    {
      target: 19,
      maxDoubles: 2,
      result: 7,
    },
    {
      target: 10,
      maxDoubles: 4,
      result: 4,
    },
  ];

  for (const { target, maxDoubles, result } of tests) {
    it(`${target}, ${maxDoubles} -> ${result}`, () => {
      assert.deepStrictEqual(minMoves(target, maxDoubles), result);
    });
  }
});
