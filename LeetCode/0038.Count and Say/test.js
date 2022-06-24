'use strict';

const assert = require('assert');

const { countAndSay } = require('./');

describe('#countAndSay', () => {
  const tests = [
    {
      n: 1,
      result: '1',
    },
    {
      n: 4,
      result: '1211',
    },
  ];

  for (const { n, result } of tests) {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(countAndSay(n), result);
    });
  }
});
