'use strict';

module.exports = { minSetSize };

/**
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const Size = arr.length;
  if (Size < 3) return 1;

  const max = Math.max(...arr);
  const freq = new Uint16Array(max + 1);
  for (const item of arr) freq[item]++;

  let step = 0;
  let sum = 0;
  freq.sort((a, b) => b - a);
  for (const val of freq) {
    sum += val;
    step++;
    if (sum >= Size / 2) return step;
  }
}
