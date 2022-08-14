'use strict';

const assert = require('assert');

const { convertToTitle } = require('./');

describe('#convertToTitle', () => {
  const tests = [
    {
      columnNumber: 1,
      result: 'A',
    },
    {
      columnNumber: 2,
      result: 'B',
    },
    {
      columnNumber: 3,
      result: 'C',
    },
    {
      columnNumber: 26,
      result: 'Z',
    },
    {
      columnNumber: 27,
      result: 'AA',
    },
    {
      columnNumber: 28,
      result: 'AB',
    },
    {
      columnNumber: 52,
      result: 'AZ',
    },
    {
      columnNumber: 701,
      result: 'ZY',
    },
    {
      columnNumber: 8058,
      result: 'KWX',
    },
  ];

  for (const { columnNumber, result } of tests) {
    it(`${columnNumber} -> ${result}`, () => {
      assert.deepStrictEqual(convertToTitle(columnNumber), result);
    });
  }
});
