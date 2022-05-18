/** LeetCode 932. Beautiful Array
 * @param {number} n
 * @return {number[]} 
 */
 var beautifulArray = function(n) {
  let memo = new Map();
  const dc = (n) => {
    if (memo.has(n)) {
      return memo.get(n);
    }
    let beautifulArray = new Array(n);
    if (n == 1){
      beautifulArray[0] = 1;
    }else{
      let t = 0;

      let left = dc(Math.ceil(n/2));
      left.forEach((v) => beautifulArray[t++]= 2*v-1);

      let right = dc(Math.floor(n/2));
      right.forEach((v) => beautifulArray[t++]= 2*v);
    }
    memo.set(n,beautifulArray);
    return beautifulArray;
  }
  return dc(n);
};