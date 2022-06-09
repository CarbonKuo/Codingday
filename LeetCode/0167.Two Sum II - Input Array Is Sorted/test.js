'use strict';

const assert = require('assert');

const { twoSum } = require('./');

describe('#twoSum', () => {
  const tests = [
    {
      numbers: [2, 7, 11, 15],
      target: 9,
      result: [1, 2],
    },
    {
      numbers: [2, 3, 4],
      target: 6,
      result: [1, 3],
    },
    {
      numbers: [-1, 0],
      target: -1,
      result: [1, 2],
    },
  ];

  for (const { numbers, target, result } of tests) {
    it(`${numbers}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(twoSum(numbers, target), result);
    });
  }
});
