'use strict';

const assert = require('assert');

const { countMatches } = require('./');

describe('#countMatches', () => {
  const tests = [
    {
      items: [
        ['phone', 'blue', 'pixel'],
        ['computer', 'silver', 'lenovo'],
        ['phone', 'gold', 'iphone'],
      ],
      ruleKey: 'color',
      ruleValue: 'silver',
      result: 1,
    },
    {
      items: [
        ['phone', 'blue', 'pixel'],
        ['computer', 'silver', 'phone'],
        ['phone', 'gold', 'iphone'],
      ],
      ruleKey: 'type',
      ruleValue: 'phone',
      result: 2,
    },
  ];

  for (const { items, ruleKey, ruleValue, result } of tests) {
    it(`${items}, ${ruleKey}, ${ruleValue} -> ${result}`, () => {
      assert.deepStrictEqual(countMatches(items, ruleKey, ruleValue), result);
    });
  }
});
