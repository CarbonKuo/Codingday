/** LeetCode 942. DI String Match
 * @param {string} string
 * @return {number[]} res
 */
var diStringMatch = function(string) {
  let perm = new Array(string.length + 1).fill(0).map((v,i) => i);
  let index = 0;
  let front = 0;
  let rear = string.length;
  let res = [];
  while(front < rear){
    if(string[index] === 'I'){
      res.push(perm[front]);
      front++;
    }else if(string[index] === 'D'){
      res.push(perm[rear]);
      rear--;
    }
    index++;
  }
  if(front === rear)res.push(perm[rear]);
  return res;
};

// var diStringMatch = function(string) {
//   let len = string.length;
//   let front = 0;
//   let rear = len;
//   let perm = new Array(string.length + 1).fill(0).map((v,i) => i);
//   for (let i = 0; i < len; i++){
//     perm[i] = string[i] === 'I' ? front++ : rear--;
//   }
//   perm[len] = rear;
//   return perm;
// };