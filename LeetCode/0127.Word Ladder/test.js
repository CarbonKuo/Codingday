'use strict';

const assert = require('assert');

const { ladderLength } = require('./');

describe('#ladderLength', () => {
  const tests = [
    {
      beginWord: 'hit',
      endWord: 'cog',
      wordList: ['hot', 'dot', 'cog', 'lot', 'log', 'dog'],
      result: 5,
    },
    {
      beginWord: 'hit',
      endWord: 'cog',
      wordList: ['hot', 'dot', 'dog', 'lot', 'log'],
      result: 0,
    },
  ];

  for (const { beginWord, endWord, wordList, result } of tests) {
    it(`${beginWord}, ${endWord}, ${wordList} -> ${result}`, () => {
      assert.deepStrictEqual(ladderLength(beginWord, endWord, wordList), result);
    });
  }
});
