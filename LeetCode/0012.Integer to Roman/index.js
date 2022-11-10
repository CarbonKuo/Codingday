'use strict';

module.exports = { intToRoman };

/**
 * @param {number} num
 * @return {string} res
 */
function intToRoman(num) {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const arr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let res = '';
  let index = 0;
  while (num) {
    while (num >= vals[index]) {
      res += arr[index];
      num -= vals[index];
    }
    index++;
  }
  return res;
}
