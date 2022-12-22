'use strict';

const assert = require('assert');

const { leastBricks } = require('./');

describe('#leastBricks', () => {
  const tests = [
    {
      wall: [
        [1, 2, 2, 1],
        [3, 1, 2],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1],
      ],
      result: 2,
    },
    {
      wall: [[1], [1], [1]],
      result: 3,
    },
  ];

  for (const { wall, result } of tests) {
    it(`${wall} -> ${result}`, () => {
      assert.deepStrictEqual(leastBricks(wall), result);
    });
  }
});
