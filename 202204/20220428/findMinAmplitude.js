/** Test 1 Minimize Amplitude After K Removals
 * @param {number[]} nums
 * @param {number} deleteElements
 * @return {number} minAmplitude
 *  */
function findMinAmplitude(nums, deleteElements) {
  if (deleteElements >= nums.length - 1) return 0;
  let sortNums = nums.sort((a, b) => {
    return a - b;
  });
  let interval = sortNums.length - deleteElements;
  let minAmplitude = sortNums[sortNums.length - 1] - sortNums[0];

  for (let i = 0; i <= sortNums.length - interval; i++) {
    if (sortNums[i + interval - 1] - sortNums[i] < minAmplitude) {
      minAmplitude = sortNums[i + interval - 1] - sortNums[i];
    }
  }
  return minAmplitude;
}

// let [nums, deleteElements] = [[2, 10, 14, 12, 30],2]; // 4
// let [nums, deleteElements] = [[2, 10, 13, 14], 2]; // 1
// let [nums, deleteElements] = [[2, 3, 4 ,9, 13 ,19 ,20],2]; // 11
// let [nums, deleteElements] = [[100, 101 , 110, 113, 119 ,120],2]; // 10
// let [nums, deleteElements] = [[1,5,9, 47, 51 ,92,96,100],5]; // 8
