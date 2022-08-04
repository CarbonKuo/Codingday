'use strict';

const assert = require('assert');

const { longestCommonPrefix } = require('./');

describe('#longestCommonPrefix', () => {
  const tests = [
    {
      strs: ['flower', 'flow', 'flight'],
      result: 'fl',
    },
    {
      strs: ['dog', 'racecar', 'car'],
      result: '',
    },
  ];

  for (const { strs, result } of tests) {
    it(`${strs} -> ${result}`, () => {
      assert.deepStrictEqual(longestCommonPrefix(strs), result);
    });
  }
});
