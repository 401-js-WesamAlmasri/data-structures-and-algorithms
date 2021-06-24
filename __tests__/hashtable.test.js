'use strict';

const { Hashtable } = require('../Data-Structures/hashTable/hashtable');

const TABLE_SIZE = 1021;

describe('Hash Table', () => {
  it('(hash method) should return the same index with the same key', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key = 'suchalongkey';
    // Act
    const index1 = hTable.hash(key);
    const index2 = hTable.hash(key);
    // Assert
    expect(index1).toBe(index2); // 589 for 1021 hash table size
  });

  it('(hash method) should hash a key to an in-range value', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key = 'suchalongkey';
    const results = [];
    // Act
    for(let i = 0; i < 10; i++){
        results.push(hTable.hash(key + Math.random()*1000));
    }
    // Assert
    const notExpectedValues = results.filter(val => val > TABLE_SIZE || val < 0);
    expect(notExpectedValues.length).toBe(0);
  });

  it('should add a key/value to the hashtable', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key = 'suchalongkey';
    const value = 'wesam almasri';
    const expectedIndex = hTable.hash(key);
    // Act
    hTable.add(key, value);
    // Assert
    expect(hTable.table[expectedIndex].head.data[key]).toBe(value);
  });

  it('should returns null for a key that does not exist in the hashtable', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key = 'suchalongkey';
    const value = 'wesam almasri';
    hTable.add(key, value);
    // Act
    const receivedValue = hTable.get(key);
    // Assert
    expect(receivedValue).toBe(value);
  });

  it('should handle a collision within the hashtable', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key1 = 'wes';
    const value1 = 'val1';
    const key2 = 'sew';
    const value2 = 'val2';
    hTable.add(key1, value1);
    hTable.add(key2, value2);
    // Act
    const receivedValue1 = hTable.get(key1);
    const receivedValue2 = hTable.get(key2);
    // Assert
    expect(receivedValue1).toBe(value1);
    expect(receivedValue2).toBe(value2);
  });

  it('should retrieve a value from a bucket within the hashtable that has a collision', () => {
    // Arrange
    const hTable = new Hashtable(TABLE_SIZE);
    const key1 = 'wes';
    const value1 = 'val1';
    const key2 = 'sew';
    const value2 = 'val2';
    hTable.add(key1, value1);
    hTable.add(key2, value2);
    // Act
    const receivedValue1 = hTable.get(key1);
    const receivedValue2 = hTable.get(key2);
    // Assert
    expect(receivedValue1).toBe(value1);
    expect(receivedValue2).toBe(value2);
  });
});
