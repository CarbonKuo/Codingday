'use strict';

const assert = require('assert');

const { capitalizeTitle } = require('./');

describe('#capitalizeTitle', () => {
  const tests = [
    {
      title: 'capiTalIze tHe titLe',
      result: 'Capitalize The Title',
    },
    {
      title: 'First leTTeR of EACH Word',
      result: 'First Letter of Each Word',
    },
    {
      title: 'i lOve leetcode',
      result: 'i Love Leetcode',
    },
  ];

  for (const { title, result } of tests) {
    it(`${title} -> ${result}`, () => {
      assert.deepStrictEqual(capitalizeTitle(title), result);
    });
  }
});
