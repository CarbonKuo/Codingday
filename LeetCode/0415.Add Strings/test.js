'use strict';

const assert = require('assert');

const { addStrings } = require('./');

describe('#addStrings', () => {
  const tests = [
    {
      num1: '11',
      num2: '123',
      result: '134',
    },
    {
      num1: '123',
      num2: '456',
      result: '579',
    },
    {
      num1: '77',
      num2: '456',
      result: '533',
    },
    {
      num1: '0',
      num2: '0',
      result: '0',
    },
  ];

  for (const { num1, num2, result } of tests) {
    it(`${num1}, ${num2} -> ${result}`, () => {
      assert.deepStrictEqual(addStrings(num1, num2), result);
    });
  }
});
