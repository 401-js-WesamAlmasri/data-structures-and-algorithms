'use strict';

const {
  Queue,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogQueue.enqueue(animal);
    } else if (animal.type === 'cat') {
      this.catQueue.enqueue(animal);
    } else {
      throw new Error('Invalid animal input');
    }
    
  }

  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogQueue.dequeue();
    } else if (pref === 'cat') {
      return this.catQueue.dequeue();
    }
    return null;
  }
}

module.exports = AnimalShelter;
