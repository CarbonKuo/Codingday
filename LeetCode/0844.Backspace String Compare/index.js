'use strict';

module.exports = { backspaceCompare };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function backspaceCompare(s, t) {
  const stack = [];
  for (const char of s) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  const s2 = stack.join('');
  stack.length = 0;
  for (const char of t) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  const t2 = stack.join('');
  return s2 === t2;
}
