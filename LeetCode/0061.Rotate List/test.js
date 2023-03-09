'use strict';

const assert = require('assert');
const { rotateRight } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#rotateRight', () => {
  const tests = [
    {
      head: [1, 2, 3, 4, 5],
      k: 2,
      result: [4, 5, 1, 2, 3],
    },
    {
      head: [0, 1, 2],
      k: 4,
      result: [2, 0, 1],
    },
  ];

  makeTestLinkNodes(tests, 'head');
  makeTestLinkNodes(tests, 'result');

  for (const { head, _head, k, result, _result } of tests) {
    it(`${_head}, ${k} -> ${_result}`, () => {
      assert.deepStrictEqual(rotateRight(head, k), result);
    });
  }
});
