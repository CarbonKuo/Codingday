/** LeetCode 1342. Number of Steps to Reduce a Number to Zero
 * @param {number} num
 * @return {number} res
 */
var numberOfSteps = function (num) {
  let res = 0;
  while(num > 0){
    if(num % 2 === 0){
      num /= 2;
    }else{
      num -= 1;
    }
    res++;
  }
  return res;
};
