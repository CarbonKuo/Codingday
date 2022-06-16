'use strict';

module.exports = { romanToInt };

/**
 * @param {string} s
 * @return {number} res
 */
function romanToInt(s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i + 1]] && map[s[i]] < map[s[i + 1]]) {
      res -= map[s[i]];
    } else {
      res += map[s[i]];
    }
  }
  return res;
}
