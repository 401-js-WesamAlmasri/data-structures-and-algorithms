'use strict';

const { Hashtable } = require('../Data-Structures/hashTable/hashtable');
const { leftJoin } = require('../hashmapLeftJoin/hashmap-left-join');

describe('leftJoin function', () => {
  it('should return an array with all elements in the left table joined with with right table', () => {
    // Arrange
    // creating hash tables and add items to it
    const table1 = new Hashtable(1021);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    const table2 = new Hashtable(1021);
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');
    const expectedItems = [
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
    ];
    // Act
    const result = leftJoin(table1, table2);
    //Assert
    expect(result.length).toBe(5);

    result.forEach((item, i) => {
      expect(item.length).toBe(3);
      expect(item).toEqual(expectedItems[i]);
    });
  });

  it('should return an array with all elements in the first table if the second table is empty', () => {
    // Arrange
    // creating hash tables and add items to it
    const table1 = new Hashtable(1021);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    const table2 = new Hashtable(1021);
    const expectedItems = [
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['wrath', 'anger', null],
    ];
    // Act
    const result = leftJoin(table1, table2);
    //Assert
    expect(result.length).toBe(5);

    result.forEach((item, i) => {
      expect(item.length).toBe(3);
      expect(item).toEqual(expectedItems[i]);
    });
  });

  it('should return empty array if the first table is empty', () => {
    // Arrange
    // creating hash tables and add items to it
    const table1 = new Hashtable(1021);
    const table2 = new Hashtable(1021);
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');
    // Act
    const result = leftJoin(table1, table2);
    //Assert
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  it('should return an array left joined if there were a collisions', () => {
    // Arrange
    // creating hash tables and add items to it
    const table1 = new Hashtable(1021);
    table1.add('fond', 'enamored');
    table1.add('dnof', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('tiftuo', 'usher');

    const table2 = new Hashtable(1021);
    table2.add('fond', 'averse');
    table2.add('dnof', 'delight');
    table2.add('diligent', 'idle');
    table2.add('tiftuo', 'follow');
    table2.add('flow', 'jam');
    const expectedItems = [
      ['fond', 'enamored', 'averse'],
      ['dnof', 'anger', 'delight'],
      ['outfit', 'garb', null],
      ['tiftuo', 'usher', 'follow'],
      ['diligent', 'employed', 'idle'],
    ];
    // Act
    const result = leftJoin(table1, table2);
    //Assert
    expect(result.length).toBe(5);

    result.forEach((item, i) => {
      expect(item.length).toBe(3);
      expect(item).toEqual(expectedItems[i]);
    });
  });
});
