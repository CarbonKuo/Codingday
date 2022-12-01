'use strict';

const assert = require('assert');
const _ = require('lodash');
const { spiralOrder } = require('./');

describe('#spiralOrder', () => {
  const tests = [
    {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      result: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
    {
      matrix: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
  ];

  _.forEach(tests, ({ matrix, result }) => {
    it(`${matrix} -> ${result}`, () => {
      assert.deepStrictEqual(spiralOrder(matrix), result);
    });
  });
});
