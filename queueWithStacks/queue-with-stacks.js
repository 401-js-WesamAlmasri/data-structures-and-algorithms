'use strict';

const {
  Stack,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  enqueue(value) {
    // Push new value to end of the queue
    this.pushStack.push(value);
  }

  dequeue() {
    // If the queue is empty then throw error
    if (!this.pushStack.top && !this.popStack.top) {
      throw new Error('PseudoQueue is empty');
    }
    // If the frontStack is empty then push all rearStack on it so it becaome in reverse order
    if (!this.popStack.top) {
        // Move all nodes in the rearStack to frontStack in revered order
      while (this.pushStack.top != null) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    // pop the first node in frontStack (front of the PseudoQueue)
    return this.popStack.pop();
  }
}

module.exports = PseudoQueue;