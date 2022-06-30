'use strict';

const assert = require('assert');

const { hasCycle } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#hasCycle', () => {
  const tests = [
    {
      head: [1, 2, 3],
      result: false,
    },
    {
      head: [1],
      result: false,
    },
  ];

  makeTestLinkNodes(tests, 'head');

  for (const { head, result } of tests) {
    it(`${head} -> ${result}`, () => {
      assert.deepStrictEqual(hasCycle(head), result);
    });
  }
});
