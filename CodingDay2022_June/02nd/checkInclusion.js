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

/*
  1. Initialise two pointers left and right, both pointing to zero.
  2. Initialise two map needs and windows. Both are empty, and one check variable calls it a match.
  3. Iterate through the string s1, and add each character to the needs map.
  4. Count the number of characters in the needs map to the needsLen variable.
  5. If the character is in the needs map, then add it to the windows map.
  6. Check if the windows map has the same number of keys as the needs map.
  7. If the windows map has the same number of keys as the needs map, then check variable match adds one.
  8. Moving the right pointer, check if the match is equal to the needs map length.
  9. If match is equal to the needs map length, then if the right pointer minus the left pointer is equal to the s1 length, then find a match.
  10. If right pointer minus the left pointer is not equal to the s1 length, then check left pointer, if the character is in the needs map, then subtract one from the windows map.
  11. If the windows map has the same number of keys as the needs map, then subtract one from the match variable.
  12. then move the left pointer, recheck if the match is equal to the needs map length.
  13. If right pointer greater than the length of the s2, then return false.
*/