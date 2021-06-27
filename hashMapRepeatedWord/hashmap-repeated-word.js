'use strict';

const { Hashtable } = require('../Data-Structures/hashTable/hashtable');

function repeatedWord(paragraph) {
  if (typeof paragraph !== 'string')
    throw new Error('The input should be a string!');
  // Hash table to store all words
  const table = new Hashtable(1021);
  let word = '';
  // Iterate through each character in the input string
  for (let char of paragraph) {
    // not a complete word
    if (char !== ' ' && char !== ',' && char !== '.') {
        word += char;
        // got a complete word
    } else if (word.length > 0) {
      // repeated word?
      if (table.contains(word.toLowerCase())) {
        return word;
        // New word, then add it to hash table
      } else {
        table.add(word.toLowerCase(), null);
      }
      // Reset the word string
      word = '';
    }
  }
  // Not repeated words
  return null;
}

module.exports = {
  repeatedWord,
};
