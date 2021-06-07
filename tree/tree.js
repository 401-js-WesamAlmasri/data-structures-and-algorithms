'use strict';

const {
  Queue,
} = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

// Node class for Trees
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Binary tree class
class BinaryTree {
  constructor(root) {
    this.root = root || null;
  }
  // Pre order traverse method
  preOrder() {
    let result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // In order traverse method
  inOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // Post order traverse method
  postOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  // Find the maximum node value in the tree
  findMaximumValue(){
    if(!this.root){
      return null;
    }
    const findMax = (node) => {
      
      if(node === null){
        return Number.NEGATIVE_INFINITY;
      }
      let maxNode = node;
      // find the max in the left branch
      let maxLeft = findMax(node.left);
      // find the max in the right branch
      let maxRight = findMax(node.right);
      // check for the max value between all branches
      if(maxLeft.value > maxNode.value){
        maxNode = maxLeft
      }
      if(maxRight.value > maxNode.value){
        maxNode = maxRight
      }

      return maxNode
    }

    // find the max value in the tree starting from the root
    let maxNode = findMax(this.root);
    return maxNode.value;
  }

  // Breadth First Traverse, retrun an array of the result
  bfs(){
    if(!this.root) return [];
    let result = [];
    let queue = new Queue();
    // enqueue the root node to the queue
    queue.enqueue(this.root);
    while(!queue.isEmpty()){
      // get the front node in the queue
      let front = queue.dequeue();
      // add the front value to the result array
      result.push(front.value);
      // enqueue the left and right node to the queu if exists
      if(front.left) queue.enqueue(front.left);
      if(front.right) queue.enqueue(front.right);
    }

    return result;
  }
}

// Binary Search Tree class

class BinarySearchTree extends BinaryTree {
  constructor(rootVal) {
    let root;
    if (rootVal) {
      root = new Node(rootVal);
    }
    super(root);
  }

  add(value) {
    if(!this.root){
      this.root = new Node(value);
      return;
    }
    const insert = (root, value) => {
      // Return a new node if the tree is empty
      if (!root) {
        root = new Node(value);
        return root;
      }
      // Traverse to the right place and insert the node
      if (value < root.value) {
        root.left = insert(root.left, value);
      } else if (value > root.value) {
        root.right = insert(root.right, value);
      }

      return root;
    };

    insert(this.root, value);
  }

  contains(value) {
    if (!this.root) {
      return false;
    }
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      let front = queue.dequeue();
      if (front.value === value) return true;
      if (front.left) {
        queue.enqueue(front.left);
      }
      if (front.right) {
        queue.enqueue(front.right);
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};
