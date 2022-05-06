/**  LeetCode 870. Advantage Shuffle
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} res
 *  */ 
var advantageShuffle = function(nums1, nums2) {
  let len = nums1.length;
  let res = new Array(len).fill(0);
  nums1.sort((a,b) => a - b);
  let rankIndex = new Array(len).fill(0).map((v, i) => i);
  rankIndex.sort((a,b) => nums2[a] - nums2[b]);
  let front = 0;
  let rear = len - 1;
  for( let i = 0; i < len; i++){
    if(nums1[i] > nums2[rankIndex[front]]){
      res[rankIndex[front]] = nums1[i];
      front++;
    }else{
      res[rankIndex[rear]] = nums1[i];
      rear--;
    }
  }
  return res;
}

