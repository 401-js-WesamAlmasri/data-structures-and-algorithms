'use strict';

const { InsertionSort } = require('../insertionSort/insertion-sort');

describe('inserting sort function', () => {
  it('should sort and array with two items', () => {
    // Arrange
    let arr = [2, 1];
    // Act
    InsertionSort(arr);
    // Assert
    expect(arr[0]).toBe(1);
    expect(arr[1]).toBe(2);
  });

  it('should not change the order of already sorted array', () => {
    // Arrange
    let arr = [1, 2, 3, 4];
    // Act
    InsertionSort(arr);
    // Assert
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('should sort an array with more than two items', () => {
    // Arrange
    let arr = [2, 1, -1, 39, 7 ,25 ,15];
    // Act
    InsertionSort(arr);
    // Assert
    expect(arr).toEqual([-1, 1, 2, 7, 15, 25, 39]);
  });

  it('should sort an array with completely reversed order', () => {
    // Arrange
    let arr = [50, 30, 20, 10, 2, -1];
    // Act
    InsertionSort(arr);
    // Assert
    expect(arr).toEqual([-1, 2, 10, 20, 30, 50]);
  });

  it('should leave the array as it is if the array is empty or has one item', () => {
    // Arrange
    let arr1 = [50];
    let arr2 = [];
    // Act
    InsertionSort(arr1);
    InsertionSort(arr2);
    // Assert
    expect(arr1).toEqual([50]);
    expect(arr2).toEqual([]);
  });
});
