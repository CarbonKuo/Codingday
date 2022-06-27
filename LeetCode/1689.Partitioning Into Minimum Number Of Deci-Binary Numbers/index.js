'use strict';

module.exports = { minPartitions };

/**
 * @param {string} n
 * @return {number}
 */
function minPartitions(n) {
  let maxDig = 0;
  for (let i = 0; i < n.length; i++) {
    const num = parseInt(n.charAt(i));
    maxDig = Math.max(maxDig, num);
  }
  return maxDig;
}
