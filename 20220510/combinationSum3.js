/** LeetCode 216. Combination Sum III
 * @param {number} count
 * @param {number} target
 * @return {number[][]} combinationList
 */
var combinationSum3 = function(count, target) {
  const combinationList = [];
  const backtracking = (start, combination, sum) => {
    if(combination.length === count){
      if(sum === target) combinationList.push(combination);
      return;
    }
    for(let i = start; i <= Math.min(target,9); i++){
      if(sum + i <= target){
        combination.push(i);
        backtracking(i + 1, [...combination], sum + i);
        combination.pop();
      }
    }
  };
  backtracking(1, [], 0);
  return combinationList;
};

//  var combinationSum3 = function(k, n) {
//   let temp = [];
//   let res = [];
//   const check = (mask, k, n) =>{
//     temp = [];
//     for( let i = 0; i < 9; i++){
//       if((1 << i) & mask){
//         temp.push(i + 1);
//       }
//     }
//     return temp.length === k && temp.reduce((previous, value) => previous + value, 0) === n;
//   }

//   for (let mask = 0; mask < (1 << 9); mask++){
//     if(check(mask, k, n)){
//       res.push(temp);
//     }
//   }
//   return res;
// };
