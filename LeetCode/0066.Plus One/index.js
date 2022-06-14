'use strict';

module.exports = { plusOne };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const curDigit = digits[i];
    if (curDigit < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
}
