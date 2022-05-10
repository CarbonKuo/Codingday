/** LeetCode 833. Find And Replace in String
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
 var findReplaceString = function(s, indices, sources, targets) {
  let resArray = s.split('');
  for(let i = 0; i < indices.length; i++){
    let replaceString = sources[i];
    let checkString = s.slice(indices[i], indices[i] + replaceString.length);
    if (checkString === replaceString){
      let temp = new Array(replaceString.length).fill('');
      temp[0] = targets[i];
      resArray.splice(indices[i], replaceString.length, ...temp);
    }
  }
  return resArray.join('');
};


//  var findReplaceString = function(s, indices, sources, targets) {
//   let resArray = s.split('');
//   for (let i = 0; i < indices.length; i++){
//     let replaceString = sources[i];
//     let replaceIndex = s.indexOf(replaceString, 0);
//     while (replaceIndex > -1) {
//       if (replaceIndex === indices[i]) {
//         let temp = new Array(replaceString.length).fill(' ');
//         temp[0] = targets[i];
//         resArray.splice(replaceIndex, replaceString.length, ...temp);
//         break;
//       }
//       replaceIndex = s.indexOf(replaceString, replaceIndex + 1);
//     }
//   }
//   return resArray.join('').split(' ').join('');
// };
