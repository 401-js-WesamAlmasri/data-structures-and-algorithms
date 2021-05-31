'use strict';

const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter');

describe('Animal Shelter class', () => {
  it('should initiate a object successfully', () => {
    // Arrange
    // Act
    const animalShelter = new AnimalShelter();
    // Assert
    expect(animalShelter.dogQueue).toBeDefined();
    expect(animalShelter.catQueue).toBeDefined();
  });

  it('should enqueue a dog object successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const dog1 = {
      type: 'dog',
      name: 'doggy',
    };
    // Act
    animalShelter.enqueue(dog1);
    // Assert
    expect(animalShelter.dogQueue.front.value).toEqual(dog1);
    expect(animalShelter.catQueue.front).toBeNull();
  });

  it('should enqueue a dog object many times successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const dog1 = {
      type: 'dog',
      name: 'doggy',
    };
    const dog2 = {
      type: 'dog',
      name: 'deego',
    };
    const dog3 = {
      type: 'dog',
      name: 'doogo',
    };
    // Act
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(dog3);
    // Assert
    expect(animalShelter.dogQueue.rear.value).toEqual(dog3);
    expect(animalShelter.dogQueue.front.value).toEqual(dog1);
    expect(animalShelter.dogQueue.front.next.value).toEqual(dog2);
    expect(animalShelter.catQueue.front).toBeNull();
  });
  it('should enqueue a cat object successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const cat1 = {
      type: 'cat',
      name: 'caaaty',
    };
    // Act
    animalShelter.enqueue(cat1);
    // Assert
    expect(animalShelter.catQueue.front.value).toEqual(cat1);
    expect(animalShelter.dogQueue.front).toBeNull();
  });

  it('should enqueue a dog object many times successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const cat1 = {
      type: 'cat',
      name: 'caaaty',
    };
    const cat2 = {
      type: 'cat',
      name: 'ketty',
    };
    const cat3 = {
      type: 'cat',
      name: 'ketto',
    };
    // Act
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(cat3);
    // Assert
    expect(animalShelter.catQueue.front.value).toEqual(cat1);
    expect(animalShelter.catQueue.front.next.value).toEqual(cat2);
    expect(animalShelter.catQueue.front.next.next.value).toEqual(cat3);
    expect(animalShelter.dogQueue.front).toBeNull();
  });

  it('should dequeue a dog object successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const dog1 = {
      type: 'dog',
      name: 'doggy',
    };
    animalShelter.enqueue(dog1);
    // Act
    let result = animalShelter.dequeue('dog');
    // Assert
    expect(result).toEqual(dog1);
    expect(animalShelter.dogQueue.front).toBeNull();
    expect(animalShelter.catQueue.front).toBeNull();
  });

  it('should dequeue a dog object many times successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const dog1 = {
      type: 'dog',
      name: 'doggy',
    };
    const dog2 = {
      type: 'dog',
      name: 'deego',
    };
    const dog3 = {
      type: 'dog',
      name: 'doogo',
    };
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    animalShelter.enqueue(dog3);
    // Act
    let result1 = animalShelter.dequeue('dog');
    let result2 = animalShelter.dequeue('dog');
    let result3 = animalShelter.dequeue('dog');
    // Assert
    expect(result1).toEqual(dog1);
    expect(result2).toEqual(dog2);
    expect(result3).toEqual(dog3);
    expect(animalShelter.dogQueue.rear).toBeNull();
    expect(animalShelter.catQueue.front).toBeNull();
  });
  it('should dequeue a cat object successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const cat1 = {
      type: 'cat',
      name: 'caaaty',
    };
    animalShelter.enqueue(cat1);
    // Act
    let result = animalShelter.dequeue('cat');
    // Assert
    expect(result).toEqual(cat1);
    expect(animalShelter.catQueue.front).toBeNull();
    expect(animalShelter.dogQueue.front).toBeNull();
  });

  it('should dequeue a dog object many times successfully', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const cat1 = {
      type: 'cat',
      name: 'caaaty',
    };
    const cat2 = {
      type: 'cat',
      name: 'ketty',
    };
    const cat3 = {
      type: 'cat',
      name: 'ketto',
    };
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    animalShelter.enqueue(cat3);
    // Act
    let result1 = animalShelter.dequeue('cat');
    let result2 = animalShelter.dequeue('cat');
    let result3 = animalShelter.dequeue('cat');
    // Assert
    expect(result1).toEqual(cat1);
    expect(result2).toEqual(cat2);
    expect(result3).toEqual(cat3);
    expect(animalShelter.catQueue.rear).toBeNull();
    expect(animalShelter.dogQueue.front).toBeNull();
  });

  it('should throw and error if enqueue not a cat or dog object', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    const fish1 = {
      type: 'fish',
      name: 'fisheey',
    };
    // Act
    const errorTest = () => {
      animalShelter.enqueue(fish1);
    };
    // Assert
    expect(errorTest).toThrow();
  });

  it('should return null if dequeue not a cat or dog object', () => {
    // Arrange
    const animalShelter = new AnimalShelter();
    // Act
    let result = animalShelter.dequeue('fish');
    // Assert
    expect(result).toBeNull();
  });
});
