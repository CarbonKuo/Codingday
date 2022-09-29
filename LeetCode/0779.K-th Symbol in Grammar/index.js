'use strict';

module.exports = { kthGrammar };

/**
 * @param {number} n
 * @param {number} k
 * @return {number} res
 */
function kthGrammar(n, k) {
  if (n === 1) return 0;
  let res = kthGrammar(n - 1, Math.floor((k + 1) / 2));
  if (k % 2 === 0) {
    return res === 0 ? 1 : 0;
  } else {
    return res;
  }
}

// odd is origin
// 0 = '0' 1 <- generate
// 1 = '1' 0 <- generate

//tier
//row1: 0
//row2: 0'1'
//row3: 011'0'
//row4: 011010'0'1
//row5: 011010011001'0'110
