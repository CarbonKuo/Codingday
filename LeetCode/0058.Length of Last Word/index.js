'use strict';

module.exports = { lengthOfLastWord };

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      res++;
      if (s[i - 1] === ' ') {
        break;
      }
    }
  }
  return res;
}
