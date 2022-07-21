'use strict';

module.exports = { ladderLength };

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  let findQueue = [];
  let visited = {};
  let count = 1;
  for (let i = 0; i < wordList.length; i++) {
    visited[wordList[i]] = false;
  }

  findQueue.push(beginWord);

  while (findQueue.length) {
    if (findQueue.indexOf(endWord) !== -1) return count;
    let tmpQueue = [];
    while (findQueue.length) {
      let word = findQueue.shift();
      for (let check = 0; check < wordList.length; check++) {
        let value = wordList[check];
        if (!visited[value] && isSimilar(value, word)) {
          visited[value] = true;
          tmpQueue.push(value);
        }
      }
    }
    findQueue = tmpQueue;
    count++;
  }
  return 0;
}

const isSimilar = function (word1, word2) {
  let diff = 0;
  if (word1.length !== word2.length) return false;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === word2[i]) {
      continue;
    } else {
      diff++;
      if (diff >= 2) return false;
    }
  }
  return true;
};
