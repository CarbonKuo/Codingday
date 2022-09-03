'use strict';

const assert = require('assert');

const { GetImportance } = require('./');

describe('#GetImportance', () => {
  const tests = [
    {
      employees: [
        [1, 5, [2, 3]],
        [2, 3, []],
        [3, 3, []],
      ],
      id: 1,
      result: 11,
    },
    {
      employees: [
        [1, 2, [5]],
        [5, -3, []],
      ],
      id: 5,
      result: -3,
    },
  ];

  for (const { employees, id, result } of tests) {
    it(`${employees}, ${id} -> ${result}`, () => {
      assert.deepStrictEqual(GetImportance(employees, id), result);
    });
  }
});
