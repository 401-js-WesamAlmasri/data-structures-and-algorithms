'use strict';

const {
  Queue,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

class Node {
  constructor(value) {
    this.value = value || null;
    this.children = [];
  }
}

class KTree {
  constructor(root) {
    this.root = root || null;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) {
    return null;
  }
  // Create a queue
  let queue = new Queue();
  // Enqueue the root node and a new Node as array
  let newRootNode = new Node();
  queue.enqueue([tree.root, newRootNode]);
  // Loop until the queue is empty
  while (!queue.isEmpty()) {
    // Extract the front node and the alternative new node
    let [front, newNode] = queue.dequeue();

    // Change the value of new node based on front node's value
    if (front.value % 5 === 0 && front.value % 3 === 0) {
      newNode.value = 'FizzBuzz';
    } else if (front.value % 3 === 0) {
      newNode.value = 'Fizz';
    } else if (front.value % 5 === 0) {
      newNode.value = 'Buzz';
    } else {
      newNode.value = String(front.value);
    }

    // Add all front children to the queue with a new Node
    for (let node of front.children) {
      let newChildernNode = new Node();
      newNode.children.push(newChildernNode);
      queue.enqueue([node, newChildernNode]);
    }
  }

  // Return the new Tree
  let newTree = new KTree(newRootNode);
  return newTree;
}

module.exports = {
  Node,
  KTree,
  fizzBuzzTree,
};
