'use strict';

const assert = require('assert');

const { kthGrammar } = require('./');

describe('#kthGrammar', () => {
  const tests = [
    {
      n: 1,
      k: 1,
      result: 0,
    },
    {
      n: 2,
      k: 1,
      result: 0,
    },
    {
      n: 2,
      k: 2,
      result: 1,
    },
    {
      n: 3,
      k: 2,
      result: 1,
    },
    {
      n: 3,
      k: 4,
      result: 0,
    },
  ];

  for (const { n, k, result } of tests) {
    it(`${n}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kthGrammar(n, k), result);
    });
  }
});
