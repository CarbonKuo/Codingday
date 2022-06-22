'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number} res
 */
function singleNumber(nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber2(nums) {
  let set = new Set(); //Define set
  for (let num of nums) {
    if (set.has(num)) {
      //Set method to check number is in Set
      set.delete(num); //if num is in set than remove the element
    } else {
      set.add(num); //add number in Set
    }
  }
  return Array.from(set);
}
