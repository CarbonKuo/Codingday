'use strict';

module.exports = { mySqrt };

/**
 * @param {number} x
 * @return {number} res
 */
function mySqrt(x) {
  let res = Math.floor(Math.sqrt(x));
  return res;
}
