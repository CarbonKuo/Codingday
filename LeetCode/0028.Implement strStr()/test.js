'use strict';

const assert = require('assert');

const { strStr } = require('./');

describe('#strStr', () => {
  const tests = [
    {
      haystack: 'hello',
      needle: 'll',
      result: 2,
    },
    {
      haystack: 'aaaaa',
      needle: 'bba',
      result: -1,
    },
  ];

  for (const { haystack, needle, result } of tests) {
    it(`${haystack}, ${needle} -> ${result}`, () => {
      assert.deepStrictEqual(strStr(haystack, needle), result);
    });
  }
});
