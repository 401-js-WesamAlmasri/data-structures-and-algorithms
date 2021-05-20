'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // insert node at the start of linked list
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // test for existance of a node
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // representing the linked list in string format
  toString() {
    let current = this.head;
    let outputString = '';
    while (current != null) {
      if (current.next === null) {
        outputString += `{ ${current.data} } -> NULL`;
      } else {
        outputString += `{ ${current.data} } -> `;
      }
      current = current.next;
    }
    return outputString;
  }
}

module.exports = {
  Node,
  LinkedList,
};
