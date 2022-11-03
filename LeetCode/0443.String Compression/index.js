'use strict';

module.exports = { compress };

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  let result = 0;
  let read = 0;
  let count = 1;
  for (read = 0; read < chars.length; read++) {
    if (read === chars.length - 1 || chars[read] !== chars[read + 1]) {
      chars[result++] = chars[read];
      if (count > 1) {
        count = count + '';
        for (let s of count) {
          chars[result++] = s;
        }
      }
      count = 0;
    }
    count++;
  }
  return result;
}
