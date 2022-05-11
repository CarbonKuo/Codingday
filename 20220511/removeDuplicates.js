/** LeetCode 1209. Remove All Adjacent Duplicates in String II
 * @param {string} string
 * @param {number} removals
 * @return {string} removeDuplicatesString
 */
 var removeDuplicates = function(string, removals) {
  let removeDuplicatesString = [];
  for(let curString of string){
    let prev = removeDuplicatesString.pop();
    if(!prev || prev[0] !== curString){
      removeDuplicatesString.push(prev);
      removeDuplicatesString.push(curString);
    }else if(prev.length < removals - 1){
      removeDuplicatesString.push(prev + curString);
    }
  }
  return removeDuplicatesString.join('');
};

// var removeDuplicates = function(string, removals) {
//   const reg = new RegExp("([a-z])\\1{" + String(removals - 1) + "}");
//   while (reg.exec(string)) {
//     string = string.replace(reg, "");
//   }
// return string;
// }
