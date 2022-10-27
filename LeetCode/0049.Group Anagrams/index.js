'use strict';

module.exports = { groupAnagrams };

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  let groups = new Map();

  for (let string of strs) {
    let key = string.split('').sort().join();
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(string);
  }

  return [...groups.values()];
}
