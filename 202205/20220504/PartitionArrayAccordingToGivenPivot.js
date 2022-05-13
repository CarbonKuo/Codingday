/**  LeetCode 2161. Partition Array According to Given Pivot
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  let prefix = [];
  let mid = [];
  let post = [];
  for(let num of nums){
    if( num < pivot){
      prefix.push(num);
    }else if( num === pivot){
      mid.push(num);
    }else{
      post.push(num);
    }
  }
  return prefix.concat(mid).concat(post);
};