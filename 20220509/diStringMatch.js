/** LeetCode 942. DI String Match
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let perm = new Array(s.length + 1).fill(0).map((v,i) => i);
  let index = 0;
  let front = 0;
  let rear = s.length;
  let res = [];
  while(front < rear){
    if (s[index] === 'I'){
      res.push(perm[front]);
      front++;
    }else if(s[index] === 'D'){
      res.push(perm[rear]);
      rear--;
    }
    index++;
  }
  if(front === rear)res.push(perm[rear]);
  return res;
};

// var diStringMatch = function(s) {
//   let len = s.length;
//   let front = 0;
//   let rear = len;
//   let perm = new Array(s.length + 1).fill(0).map((v,i) => i);
//   for (let i = 0; i < len; i++){
//     perm[i] = s[i] === 'I' ? front++ : rear--;
//   }
//   perm[len] = rear;
//   return perm;
// };