'use strict';

const { mergeSort } = require('../mergeSort/merge-sort');

describe('merge sort function', () => {
    it('should sort and array with two items', () => {
      // Arrange
      let arr = [2, 1];
      // Act
      mergeSort(arr);
      // Assert
      expect(arr).toEqual([1, 2]);([1, 2]);
    });
  
    it('should not change the order of already sorted array', () => {
      // Arrange
      let arr = [1, 2, 3, 4];
      // Act
      mergeSort(arr);
      // Assert
      expect(arr).toEqual([1, 2, 3, 4]);
    });
  
    it('should sort an array with more than two items', () => {
      // Arrange
      let arr = [2, 1, -1, 39, 7 ,25 ,15];
      // Act
      mergeSort(arr);
      // Assert
      expect(arr).toEqual([-1, 1, 2, 7, 15, 25, 39]);
    });
  
    it('should sort an array with completely reversed order', () => {
      // Arrange
      let arr = [50, 30, 20, 10, 2, -1];
      // Act
      mergeSort(arr);
      // Assert
      expect(arr).toEqual([-1, 2, 10, 20, 30, 50]);
    });
  
    it('should leave the array as it is if the array is empty or has one item', () => {
      // Arrange
      let arr1 = [50];
      let arr2 = [];
      // Act
      mergeSort(arr1);
      mergeSort(arr2);
      // Assert
      expect(arr1).toEqual([50]);
      expect(arr2).toEqual([]);
    });
  });
  