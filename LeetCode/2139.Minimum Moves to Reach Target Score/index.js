'use strict';

module.exports = { minMoves };

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
function minMoves(target, maxDoubles) {
  let res = 0;
  while (maxDoubles && target !== 1) {
    res++;
    if (target % 2 === 1) {
      target--;
    } else {
      maxDoubles--;
      target = target / 2;
    }
  }
  res += target - 1;
  return res;
}
