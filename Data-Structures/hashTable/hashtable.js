'use strict';

const { LinkedList } = require('../linkedList/linked-list');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    if(typeof(key) !== 'string') key = String(key);
    let hash =
      (key.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0) *
        599) %
      this.size;

    return hash;
  }

  // add new key value to hash table
  add(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }

    let bucketItem = this.table[index].head;
    while (bucketItem) {
      if (Object.keys(bucketItem.data)[0] === key) {
        throw new Error('this item already exists in the table');
      }
      bucketItem = bucketItem.next;
    }

    let keyValuePair = { [key]: value };
    this.table[index].append(keyValuePair);
  }

  get(key) {
    const index = this.hash(key);

    if (!this.table[index]) return null;

    // iterate through linked list to find a match
    let bucketItem = this.table[index].head;
    while (bucketItem) {
      if (Object.keys(bucketItem.data)[0] === key) {
        return bucketItem.data[key];
      }
      bucketItem = bucketItem.next;
    }

    return null;
  }

  contains(key) {
    const index = this.hash(key);

    if (!this.table[index]) return false;

    // iterate through linked list to find a match
    let bucketItem = this.table[index].head;
    while (bucketItem) {
      if (Object.keys(bucketItem.data)[0] === String(key)) return true;
      bucketItem = bucketItem.next;
    }
    return false;
  }
}

module.exports = {
  Hashtable,
};
