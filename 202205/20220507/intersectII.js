/** LeetCode 350. Intersection of Two Arrays II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} res
 */
 var intersectII = function(nums1, nums2) {
  const map = {};
  const res = [];
  if(nums1.length < nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  for (let num1 of nums1) {
    if(map[num1]) {
      map[num1]++;
    } else {
      map[num1] = 1;
    }
  }
  for(let num2 of nums2) {
    if(map[num2] > 0) {
      res.push(num2);
      map[num2]--;
    }
  }
  return res;
};