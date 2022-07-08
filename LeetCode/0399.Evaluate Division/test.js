'use strict';

const assert = require('assert');

const { calcEquation } = require('./');

describe('#calcEquation', () => {
  const tests = [
    {
      equations: [
        ['a', 'b'],
        ['b', 'c'],
      ],
      values: [2.0, 3.0],
      queries: [
        ['a', 'c'],
        ['b', 'a'],
        ['a', 'e'],
        ['a', 'a'],
        ['x', 'x'],
      ],
      result: [6.0, 0.5, -1.0, 1.0, -1.0],
    },
    {
      equations: [
        ['a', 'b'],
        ['b', 'c'],
        ['bc', 'cd'],
      ],
      values: [1.5, 2.5, 5.0],
      queries: [
        ['a', 'c'],
        ['c', 'b'],
        ['bc', 'cd'],
        ['cd', 'bc'],
      ],
      result: [3.75, 0.4, 5.0, 0.2],
    },
    {
      equations: [['a', 'b']],
      values: [0.5],
      queries: [
        ['a', 'b'],
        ['b', 'a'],
        ['a', 'c'],
        ['x', 'y'],
      ],
      result: [0.5, 2.0, -1.0, -1.0],
    },
  ];

  for (const { equations, values, queries, result } of tests) {
    it(`${equations}, ${values}, ${queries} -> ${result}`, () => {
      assert.deepStrictEqual(calcEquation(equations, values, queries), result);
    });
  }
});
