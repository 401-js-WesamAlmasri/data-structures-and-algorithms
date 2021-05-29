'use strict';

const {
  Node,
  Stack,
  Queue,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

describe('Node class', () => {
  it('should create a node', () => {
    // arrange, act
    let value = 5;
    let node = new Node(value);

    // assert
    expect(node.value).toBe(value);
    expect(node.next).toBe(null);
  });

  it('should point to the next node', () => {
    // arrange
    let value1 = 5;
    let value2 = 10;
    let node = new Node(value1);
    let node2 = new Node(value2);
    // act
    node.next = node2;
    // assert
    expect(node.value).toBe(value1);
    expect(node.next).toEqual(node2);

    expect(node2.value).toBe(value2);
    expect(node2.next).toEqual(null);
  });
});

describe('Stack class', () => {
  it('should successfully instantiate an empty stack', () => {
    // Act
    const stack = new Stack();
    // Assertion
    expect(stack.top).toBeNull();
  });

  it('should successfully push onto a stack', () => {
    // Arrange
    const stack = new Stack();
    // Act
    let value = 5;
    stack.push(value);
    // Assertion
    expect(stack.top.value).toBe(value);
    expect(stack.top.next).toBeNull();
  });

  it('should successfully push multiple values onto a stack', () => {
    // Arrange
    const stack = new Stack();
    // Act
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    stack.push(value1);
    stack.push(value2);
    stack.push(value3);
    stack.push(value4);
    // Assertion
    expect(stack.top.value).toBe(value4);
    expect(stack.top.next.value).toBe(value3);
    expect(stack.top.next.next.value).toBe(value2);
    expect(stack.top.next.next.next.value).toBe(value1);
  });

  it('should successfully pop off the stack', () => {
    // Arrange
    const stack = new Stack();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    stack.push(value1);
    stack.push(value2);
    stack.push(value3);
    stack.push(value4);
    // Act
    const topValue = stack.pop();
    // Assertion
    expect(topValue).toBe(value4);
    expect(stack.top.value).toBe(value3);
  });

  it('should successfully empty a stack after multiple pops', () => {
    // Arrange
    const stack = new Stack();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    stack.push(value1);
    stack.push(value2);
    stack.push(value3);
    stack.push(value4);
    // Act
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    // Assertion
    expect(stack.top).toBeNull();
  });

  it('should successfully peek the next item on the stack', () => {
    // Arrange
    const stack = new Stack();
    let value1 = 5;
    let value2 = 10;
    let value3 = 15;
    let value4 = 20;
    stack.push(value1);
    stack.push(value2);
    stack.push(value3);
    stack.push(value4);
    // Act
    const topValue = stack.peek();
    // Assertion
    expect(topValue).toBe(value4);
    expect(stack.top.value).toBe(value4);
  });

  it('should rasie exception on calling pop on empty stack', () => {
    // Arrange
    const stack = new Stack();
    // Act
    const test = () => {
      const topValue = stack.pop();
    };
    // Assertion
    expect(test).toThrow();
  });

  it('should rasie exception on calling peek on empty stack', () => {
    // Arrange
    const stack = new Stack();
    // Act
    const test = () => {
      const topValue = stack.peek();
    };
    // Assertion
    expect(test).toThrow();
  });
});

describe('Node class', () => {
    it('should create a node', () => {
      // arrange, act
      let value = 5;
      let node = new Node(value);
  
      // assert
      expect(node.value).toBe(value);
      expect(node.next).toBe(null);
    });
  
    it('should point to the next node', () => {
      // arrange
      let value1 = 5;
      let value2 = 10;
      let node = new Node(value1);
      let node2 = new Node(value2);
      // act
      node.next = node2;
      // assert
      expect(node.value).toBe(value1);
      expect(node.next).toEqual(node2);
  
      expect(node2.value).toBe(value2);
      expect(node2.next).toEqual(null);
    });
  });
  
  describe('Queue class', () => {
    it('should successfully instantiate an empty Queue', () => {
      // Act
      const queue = new Queue();
      // Assertion
      expect(queue.front).toBeNull();
    });
  
    it('should successfully enqueue into a queue', () => {
      // Arrange
      const queue = new Queue();
      // Act
      let value = 5;
      queue.enqueue(value);
      // Assertion
      expect(queue.front.value).toBe(value);
      expect(queue.rear).toEqual(queue.front);
      expect(queue.front.next).toBeNull();
    });
  
    it('should successfully enqueue multiple values into a queue', () => {
      // Arrange
      const queue = new Queue();
      // Act
      let value1 = 5;
      let value2 = 10;
      let value3 = 15;
      let value4 = 20;
      queue.enqueue(value1);
      queue.enqueue(value2);
      queue.enqueue(value3);
      queue.enqueue(value4);
      // Assertion
      expect(queue.front.value).toBe(value1);
      expect(queue.front.next.value).toBe(value2);
      expect(queue.front.next.next.value).toBe(value3);
      expect(queue.front.next.next.next.value).toBe(value4);
      expect(queue.rear.value).toBe(value4);
    });
  
    it('should successfully dequeue out of a queue the expected value', () => {
      // Arrange
      const queue = new Queue();
      let value1 = 5;
      let value2 = 10;
      let value3 = 15;
      let value4 = 20;
      queue.enqueue(value1);
      queue.enqueue(value2);
      queue.enqueue(value3);
      queue.enqueue(value4);
      // Act
      const frontValue = queue.dequeue();
      // Assertion
      expect(frontValue).toBe(value1);
      expect(queue.front.value).toBe(value2);
    });
  
    it('should ssuccessfully empty a queue after multiple dequeues', () => {
      // Arrange
      const queue = new Queue();
      let value1 = 5;
      let value2 = 10;
      let value3 = 15;
      let value4 = 20;
      queue.enqueue(value1);
      queue.enqueue(value2);
      queue.enqueue(value3);
      queue.enqueue(value4);
      // Act
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      // Assertion
      expect(queue.front).toBeNull();
      expect(queue.rear).toBeNull();
    });
  
    it('should successfully peek into a queue, seeing the expected value', () => {
      // Arrange
      const queue = new Queue();
      let value1 = 5;
      let value2 = 10;
      let value3 = 15;
      let value4 = 20;
      queue.enqueue(value1);
      queue.enqueue(value2);
      queue.enqueue(value3);
      queue.enqueue(value4);
      // Act
      const frontValue = queue.peek();
      // Assertion
      expect(frontValue).toBe(value1);
      expect(queue.front.value).toBe(value1);
    });
  
    it('should rasie exception on calling dequeue on empty Queue', () => {
      // Arrange
      const queue = new Queue();
      // Act
      const test = () => {
        const frontValue = queue.dequeue();
      };
      // Assertion
      expect(test).toThrow();
    });
  
    it('should rasie exception on calling peek on empty Queue', () => {
      // Arrange
      const queue = new Queue();
      // Act
      const test = () => {
        const frontValue = queue.peek();
      };
      // Assertion
      expect(test).toThrow();
    });
  });
  