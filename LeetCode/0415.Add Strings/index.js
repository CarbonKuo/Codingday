'use strict';

module.exports = { addStrings };

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string} result
 */
function addStrings(num1, num2) {
  let result = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let a = i >= 0 ? num1[i--] - '0' : 0;
    let b = j >= 0 ? num2[j--] - '0' : 0;
    let sum = a + b + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    result = carry + result;
  }
  return result;
}
