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

  // adds a new node with the given value to the end of the list
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // add a new node with the given newValue immediately before the first value node
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    } else if (this.head.data === value) {
      this.insert(newValue);
      return;
    } else {
      while (current.next !== null) {
        if (current.next.data === value) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return;
        }
        current = current.next;
      }
    }
    throw new Error('Node not found');
  }

  // add a new node with the given newValue immediately after the first value node
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (this.tail.data === value) {
      this.append(newValue);
      return;
    } else {
      while (current !== null) {
        if (current.data === value) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return;
        }
        current = current.next;
      }
    }
    throw new Error('Node not found');
  }
}

module.exports = {
  Node,
  LinkedList,
};
