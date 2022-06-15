'use strict';

const assert = require('assert');

const { addBinary } = require('./');

describe('#addBinary', () => {
  const tests = [
    {
      a: '11',
      b: '1',
      result: '100',
    },
    {
      a: '1010',
      b: '1011',
      result: '10101',
    },
  ];

  for (const { a, b, result } of tests) {
    it(`${a}, ${b} -> ${result}`, () => {
      assert.deepStrictEqual(addBinary(a, b), result);
    });
  }
});
