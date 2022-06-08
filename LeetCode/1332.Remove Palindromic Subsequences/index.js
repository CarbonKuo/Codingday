'use strict';

module.exports = { removePalindromeSub };

/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) {
      return 2;
    }
  }
  return 1;
}
