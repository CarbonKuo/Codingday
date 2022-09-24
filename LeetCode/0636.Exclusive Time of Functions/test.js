'use strict';

const assert = require('assert');

const { exclusiveTime } = require('./');

describe('#exclusiveTime', () => {
  const tests = [
    {
      n: 2,
      logs: ['0:start:0', '1:start:2', '1:end:5', '0:end:6'],
      result: [3, 4],
    },
    {
      n: 1,
      logs: ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7'],
      result: [8],
    },
    {
      n: 2,
      logs: ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7'],
      result: [7, 1],
    },
  ];

  for (const { n, logs, result } of tests) {
    it(`${n}, ${logs} -> ${result}`, () => {
      assert.deepStrictEqual(exclusiveTime(n, logs), result);
    });
  }
});
