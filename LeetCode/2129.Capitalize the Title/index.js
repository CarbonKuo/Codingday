'use strict';

module.exports = { capitalizeTitle };

/**
 * @param {string} title
 * @return {string}
 */
function capitalizeTitle(title) {
  const words = title.split(' ');
  const result = [];

  for (const word of words) {
    if (word.length < 3) {
      result.push(word.toLowerCase());
    } else {
      result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }

  return result.join(' ');
}
