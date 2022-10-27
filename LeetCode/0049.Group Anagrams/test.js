'use strict';

const assert = require('assert');

const { groupAnagrams } = require('./');

describe('#groupAnagrams', () => {
  const tests = [
    {
      strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      result: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
    },
    {
      strs: [''],
      result: [['']],
    },
    {
      strs: ['a'],
      result: [['a']],
    },
  ];

  for (const { strs, result } of tests) {
    it(`${strs} -> ${result}`, () => {
      assert.deepStrictEqual(groupAnagrams(strs), result);
    });
  }
});
