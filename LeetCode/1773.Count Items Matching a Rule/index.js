'use strict';

module.exports = { countMatches };

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number} res
 */
function countMatches(items, ruleKey, ruleValue) {
  let ruleKeyIndex = ruleKey === 'color' ? 1 : ruleKey === 'type' ? 0 : 2;
  let res = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleKeyIndex] === ruleValue) {
      res++;
    }
  }
  return res;
}

// /**
//  * @param {string[][]} items
//  * @param {string} ruleKey
//  * @param {string} ruleValue
//  * @return {number}
//  */
//  function countMatches(items, ruleKey, ruleValue) {
//   let index = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
//   return items.filter(item => item[index] === ruleValue).length;
//  }
