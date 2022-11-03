'use strict';

const assert = require('assert');

const { compress } = require('./');

describe('#compress', () => {
  const tests = [
    {
      chars: ['a', 'a', 'b', 'b', 'c', 'c', 'c'],
      result: 6,
    },
    {
      chars: ['a'],
      result: 1,
    },
    {
      chars: ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      result: 4,
    },
    {
      chars: ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'c'],
      result: 5,
    },
  ];

  for (const { chars, result } of tests) {
    it(`${chars} -> ${result}`, () => {
      assert.deepStrictEqual(compress(chars), result);
    });
  }
});
