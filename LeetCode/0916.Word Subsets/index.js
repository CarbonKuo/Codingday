'use strict';

module.exports = { wordSubsets };

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
function wordSubsets(words1, words2) {
  let Targets = words1;
  let Subsets = words2;
  let Set = new Array(26).fill(0);
  Subsets.forEach((subset) => {
    let tmp = new Array(26).fill(0);
    for (let char of subset) {
      let idx = char.charCodeAt() - 97;
      if (tmp[idx]++ === Set[idx]) {
        Set[idx]++;
      }
    }
  });
  return Targets.filter((target) => {
    let tmp = Set.slice();
    for (let c of target) {
      let idx = c.charCodeAt() - 97;
      if (tmp[idx] > 0) {
        tmp[idx]--;
      }
    }
    return tmp.every((cnt) => cnt === 0);
  });
}
