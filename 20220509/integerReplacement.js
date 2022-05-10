/** LeetCode 397. Integer Replacement
 * @param {number} number
 * @return {number} res
 */
var diStringMatch = function(number) {
  let res = 0;
  while (number !== 1){
    if( number % 2 === 0){
      res++;
      number = Math.floor(number / 2);
    }else if(number % 4 === 1){
      res += 2;
      number = Math.floor(number / 2);
    }else{
      if(number === 3){
        res += 2;
        number = 1;
      }else{
        res += 2;
        number = Math.floor(number / 2) + 1;
      }
    }
  }
  return res;
};