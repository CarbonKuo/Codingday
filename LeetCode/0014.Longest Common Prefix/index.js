'use strict';

module.exports = { longestCommonPrefix };

/**
 * @param {string[]} strs
 * @return {string} prefix
 */
function longestCommonPrefix(strs) {
  let stringElements = strs.length;
  if (stringElements === 0) return '';
  if (stringElements === 1) return strs[0];
  let prefix = strs[0];

  for (let i = 1; i < stringElements; i++) {
    let currentString = strs[i];
    let checkIndex = 0;
    while (
      checkIndex < prefix.length &&
      checkIndex < currentString.length &&
      prefix[checkIndex] === currentString[checkIndex]
    ) {
      checkIndex++;
    }
    prefix = prefix.slice(0, checkIndex);
  }

  return prefix;
}
