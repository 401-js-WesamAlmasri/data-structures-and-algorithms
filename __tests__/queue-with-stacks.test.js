'use strict';

const PseudoQueue = require('../queueWithStacks/queue-with-stacks');

describe('PseudoQueue', () => {
  it('should enqueue to an empty queue successfully', () => {
    // Arrangr
    const pseudoQueue = new PseudoQueue();
    let value = 5;
    // Act
    pseudoQueue.enqueue(value);
    // Assert
    expect(pseudoQueue.pushStack.top.value).toBe(value);
  });
  it('should enqueue many tiems to the queue successfully', () => {
    // Arrangr
    const pseudoQueue = new PseudoQueue();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    // Act
    pseudoQueue.enqueue(value1);
    pseudoQueue.enqueue(value2);
    pseudoQueue.enqueue(value3);
    pseudoQueue.enqueue(value4);
    // Assert
    expect(pseudoQueue.pushStack.top.value).toBe(value4);
    expect(pseudoQueue.pushStack.top.next.value).toBe(value3);
    expect(pseudoQueue.pushStack.top.next.next.value).toBe(value2);
    expect(pseudoQueue.pushStack.top.next.next.next.value).toBe(value1);
  });
  it('should dequeue one tiem from the queue successfully', () => {
    // Arrangr
    const pseudoQueue = new PseudoQueue();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    pseudoQueue.enqueue(value1);
    pseudoQueue.enqueue(value2);
    pseudoQueue.enqueue(value3);
    pseudoQueue.enqueue(value4);
    // Act
    let frontValue = pseudoQueue.dequeue();
    // Assert
    expect(frontValue).toBe(value1);
  });
  it('should dequeue many times until the the queue become empty successfully', () => {
    // Arrangr
    const pseudoQueue = new PseudoQueue();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    pseudoQueue.enqueue(value1);
    pseudoQueue.enqueue(value2);
    pseudoQueue.enqueue(value3);
    pseudoQueue.enqueue(value4);
    // Act
    let frontValue1 = pseudoQueue.dequeue();
    let frontValue2 = pseudoQueue.dequeue();
    let frontValue3 = pseudoQueue.dequeue();
    let frontValue4 = pseudoQueue.dequeue();
    // Assert
    expect(frontValue1).toBe(value1);
    expect(frontValue2).toBe(value2);
    expect(frontValue3).toBe(value3);
    expect(frontValue4).toBe(value4);
    expect(pseudoQueue.pushStack.top).toBeNull();
    expect(pseudoQueue.popStack.top).toBeNull();
  });
  it('should throw an exception in case of dequeue in empty queue', () => {
    // Arrangr
    const pseudoQueue = new PseudoQueue();
    // Act
    const testFunc = () => {
      pseudoQueue.dequeue();
    };
    // Assert
    expect(testFunc).toThrow();
  });
});
