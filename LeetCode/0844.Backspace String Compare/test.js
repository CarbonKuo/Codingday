'use strict';

const assert = require('assert');

const { backspaceCompare } = require('./');

describe('#backspaceCompare', () => {
  const tests = [
    {
      s: 'ab#c',
      t: 'ad#c',
      result: true,
    },
    {
      s: 'ab##',
      t: 'c#d#',
      result: true,
    },
    {
      s: 'a#c',
      t: 'b',
      result: false,
    },
  ];

  for (const { s, t, result } of tests) {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(backspaceCompare(s, t), result);
    });
  }
});
