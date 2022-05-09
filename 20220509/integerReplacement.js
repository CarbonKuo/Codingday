/** LeetCode 397. Integer Replacement
 * @param {number} n
 * @return {number}
 */
var diStringMatch = function(n) {
  let res = 0;
  while (n !== 1){
    if( n % 2 === 0){
      res++;
      n = Math.floor(n / 2);
    }else if (n % 4 === 1){
      res += 2;
      n = Math.floor(n / 2);
    }else{
      if(n === 3){
        res += 2;
        n = 1;
      } else {
        res += 2;
        n = Math.floor(n / 2) + 1;
      }
    }
  }
  return res;
};