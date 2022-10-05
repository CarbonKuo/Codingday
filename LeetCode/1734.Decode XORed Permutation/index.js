'use strict';

module.exports = { decode };

/**
 * @param {number[]} encoded
 * @return {number[]} perm
 */
function decode(encoded) {
  const list = encoded.length + 1;
  let total = 0;
  let odd = 0;
  for (let i = 1; i <= list; i++) {
    total ^= i;
    if (i & 1) {
      odd ^= encoded[i];
    }
  }
  const perm = new Array(list);
  perm[0] = total ^ odd;
  for (let i = 1; i < list; i++) {
    perm[i] = perm[i - 1] ^ encoded[i - 1];
  }
  return perm;
}
