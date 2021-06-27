'use strict';

const {
  repeatedWord,
} = require('../hashMapRepeatedWord/hashmap-repeated-word');

describe('hashmap-repeated-word function', () => {
  it('should throw an exception if the input is not a string', () => {
    // Arrange
    let string = 5;
    // Act
    const testFn = () => repeatedWord(string);
    // Assert
    expect(testFn).toThrow();
  });

  it('should return null if the string input is empty', () => {
    // Arrange
    let string = '';
    // Act
    const result = repeatedWord(string);
    // Assert
    expect(result).toBeNull();
  });

  it('should return null if the string input has one word', () => {
    // Arrange
    let string = 'wesam';
    // Act
    const result = repeatedWord(string);
    // Assert
    expect(result).toBeNull();
  });

  it('should return "a", the first repeated word in the string', () => {
    // Arrange
    let string = 'Once upon a time, there was a brave princess who...';
    // Act
    const result = repeatedWord(string);
    // Assert
    expect(result).toBe('a');
  });

  it('should return "it", the first repeated word in the string', () => {
    // Arrange
    let string =
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    // Act
    const result = repeatedWord(string);
    // Assert
    expect(result).toBe('it');
  });

  it('should return "summer", the first repeated word in the string', () => {
    // Arrange
    let string =
      'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    // Act
    const result = repeatedWord(string);
    // Assert
    expect(result).toBe('summer');
  });
});
