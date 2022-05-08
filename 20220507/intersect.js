/** LeetCode 349. Intersection of Two Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];
  if(nums1.length < nums2.length){
    for(let i = 0; i < nums1.length; i++){
      if(nums2.includes(nums1[i]) && !res.includes(nums1[i])){
        res.push(nums1[i]);
      }
    }
  }else{
    for(let i = 0; i < nums2.length; i++){
      if(nums1.includes(nums2[i]) && !res.includes(nums2[i])){
        res.push(nums2[i]);
      }
    }
  }
  return res;
};

// var intersect = function(nums1, nums2) {
//   let res = [];
//   if (nums1.length > nums2.length) {
//     [nums1, nums2] = [nums2, nums1];
//   }
//   for(let i = 0; i < nums1.length; i++){
//     if(nums2.includes(nums1[i]) && !res.includes(nums1[i])){
//       res.push(nums1[i]);
//     }
//   }
//   return res;
// };