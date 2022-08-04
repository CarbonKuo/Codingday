'use strict';

module.exports = { longestCommonPrefix, longestCommonPrefix2 };

/**
 * @param {string[]} strs
 * @return {string} prefix
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

/**
 * @param {string[]} strs
 * @return {string} prefix
 */
function longestCommonPrefix2(strs) {
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
