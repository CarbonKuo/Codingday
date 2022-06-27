'use strict';

const assert = require('assert');

const { minPartitions } = require('./');

describe('#minPartitions', () => {
  const tests = [
    {
      n: '32',
      result: 3,
    },
    {
      n: '82734',
      result: 8,
    },
    {
      n: '27346209830709182346',
      result: 9,
    },
  ];

  for (const { n, result } of tests) {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(minPartitions(n), result);
    });
  }
});
