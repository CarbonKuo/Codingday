/** LeetCode 567. Permutation in String
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  let left = 0, right = 0;
  let needs = {}, windows = {};
  let match = 0;
  for(let i = 0; i < s1.length; i++){
    needs[s1[i]] ? needs[s1[i]]++ : needs[s1[i]] = 1;
  }
  let needsLen = Object.keys(needs).length;
  while(right < s2.length){
    let c1 = s2[right];
    if(needs[c1]){
      windows[c1] ? windows[c1]++ : windows[c1] = 1;
      if(windows[c1] === needs[c1]){
        match++;
      }
    } 
    right++;
    while(match === needsLen){
      if(right - left === s1.length){
        return true;
      }
      let c2 = s2[left];
      if(needs[c2]){
        windows[c2]--;
        if(windows[c2] < needs[c2]){
          match--;
        }
      }
      left++;
    }
  }
  return false;
};
