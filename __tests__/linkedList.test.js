'use strict';
const {
  Node,
  LinkedList,
} = require('../Data-Structures/linkedList/linked-list');

// Node test
describe('Node class', () => {
  it('should create a node', () => {
    // arrange, act
    let node = new Node(5);

    // assert
    expect(node.data).toBe(5);
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
    expect(node.data).toBe(value1);
    expect(node.next).toEqual(node2);

    expect(node2.data).toBe(value2);
    expect(node2.next).toEqual(null);
  });
});

// Linked List test

describe('Linked List', () => {
  it('should create an empty linked list', () => {
    // arrange, act
    let li = new LinkedList();
    // assert
    expect(li.head).toBeNull();
    expect(li.tail).toBeNull();
    expect(li.length).toBe(0);
  });

  it('should add new item to empty linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 5;
    // act
    li.insert(value);
    //assert
    expect(li.head).not.toBeNull();
    expect(li.tail).not.toBeNull();

    expect(li.tail).toEqual(li.head);

    expect(li.head.data).toBe(value);
    expect(li.head.next).toBeNull();

    expect(li.length).toBe(1);
  });

  it('should add new item to not empty linked list', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    let value = 15;
    // act
    li.insert(value);
    //assert
    expect(li.head).not.toBeNull();
    expect(li.tail).not.toBeNull();

    expect(li.head.next).not.toBeNull();
    expect(li.head.next.data).toBe(10);
    expect(li.head.next.next).not.toBeNull();
    expect(li.head.next.next.data).toBe(5);

    expect(li.tail).toEqual(li.head.next.next);
    expect(li.tail.next).toBe(null);

    expect(li.length).toBe(3);
  });

  it('should returnt true if the value included in the linked list', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(-5);
    let value = 15;
    // act
    let result = li.includes(value);

    // assert
    expect(result).toBe(true);
  });

  it('should returnt false if the value not included in the linked list', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(-5);
    let value = 50;
    // act
    let result = li.includes(value);

    // assert
    expect(result).toBe(false);
  });

  it('should returns a string representing all the values in the Linked List,', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(-5);
    li.insert(33);
    // act
    let result = li.toString();
    // assert
    expect(result).toEqual(
      '{ 33 } -> { -5 } -> { 15 } -> { 10 } -> { 5 } -> NULL'
    );
  });
});
