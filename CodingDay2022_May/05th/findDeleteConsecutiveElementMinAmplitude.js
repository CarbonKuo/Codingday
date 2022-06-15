/** Test 2 Minimize Amplitude After K Consecutive Elements Removals
 * @param {number[]} nums
 * @param {number} deleteElements
 * @return {number} minAmplitude
 *  */
function findDeleteConsecutiveElementMinAmplitude(nums, deleteElements) {
  if (nums.length - 1 <= deleteElements) {
    return 0;
  }
  let minAmplitude = Infinity;
  for (let i = 0; i < nums.length - deleteElements + 1; i++) {
    let copy = [...nums];
    copy.splice(i, deleteElements);
    minAmplitude = Math.min(minAmplitude, Math.max(...copy) - Math.min(...copy));
  }
  return minAmplitude;
}

// let [A,K] = [[5, 3, 6, 1, 3],2]; // 2
// let [A,K] = [[8, 8, 4, 3],2]; // 0
// let [A,K] = [[3, 5, 1, 3, 9, 8],4]; // 1
// let [A,K] = [[3, 5, 1, 3, 9, 8],5]; // 0
// document.write(findDeleteConsecutiveElementMinAmplitude(A, K));
