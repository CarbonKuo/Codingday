'use strict';

const assert = require('assert');

const { wordSubsets } = require('./');

describe('#wordSubsets', () => {
  const tests = [
    {
      words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      words2: ['e', 'o'],
      result: ['facebook', 'google', 'leetcode'],
    },
    {
      words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      words2: ['l', 'e'],
      result: ['apple', 'google', 'leetcode'],
    },
    {
      words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      words2: ['e', 'oo'],
      result: ['facebook', 'google'],
    },
    {
      words1: ['amazon', 'apple', 'facebook', 'google', 'leetcode'],
      words2: ['lo', 'eo'],
      result: ['google', 'leetcode'],
    },
  ];

  for (const { words1, words2, result } of tests) {
    it(`${words1}, ${words2} -> ${result}`, () => {
      assert.deepStrictEqual(wordSubsets(words1, words2), result);
    });
  }
});
