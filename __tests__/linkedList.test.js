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

  it('should add a node to the end of the linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    //act
    li.append(value);
    //assert
    expect(li.tail.data).toBe(value);
    expect(li.tail.next).toBeNull();
    expect(li.length).toBe(4);
  });

  it('should add multiple nodes to the end of a linked list', () => {
    // arrange
    let li = new LinkedList();
    let value1 = 31;
    let value2 = 32;
    let value3 = 33;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    //act
    li.append(value1);
    li.append(value2);
    li.append(value3);
    //assert
    expect(li.head.next.next.next.data).toBe(value1);
    expect(li.head.next.next.next.next.data).toBe(value2);
    expect(li.head.next.next.next.next.next.data).toBe(value3);
    expect(li.head.next.next.next.next.next).toEqual(li.tail);
    expect(li.tail.data).toBe(value3);
    expect(li.tail.next).toBeNull();
    expect(li.length).toBe(6);
  });

  it('should insert a node before a node located in the middle of a linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 15;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    li.insertBefore(value, newValue);
    //assert
    expect(li.head.data).toBe(25);
    expect(li.tail.data).toBe(5);
    expect(li.head.next.next.data).toBe(newValue);
    expect(li.length).toBe(6);
  });

  it('should insert a node before the first node of a linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 25;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    li.insertBefore(value, newValue);
    //assert
    expect(li.head.data).toBe(newValue);
    expect(li.head.next.data).toBe(25);
    expect(li.length).toBe(6);
  });

  it('should raise an ecxeption if the value to insert before not found', () => {
    // arrange
    let li = new LinkedList();
    let value = 12;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    const func = () => {
      li.insertBefore(value, newValue);
    }
    
    //assert
    expect(func).toThrow('Node not found')
    expect(li.tail.data).toBe(5);
    expect(li.head.data).toBe(25);
    expect(li.length).toBe(5);
  });

  it('should insert after a node in the middle of the linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 5;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    li.insertAfter(value, newValue);
    //assert
    expect(li.head.data).toBe(25);
    expect(li.tail.data).toBe(newValue);
    expect(li.head.next.next.next.next.next.data).toBe(newValue);
    expect(li.length).toBe(6);
  });

  it('should insert a node after the last node of the linked list', () => {
    // arrange
    let li = new LinkedList();
    let value = 5;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    li.insertAfter(value, newValue);
    //assert
    expect(li.tail.data).toBe(newValue);
    expect(li.head.next.next.next.next.next.data).toBe(newValue);
    expect(li.length).toBe(6);
  });

  it('should raise an ecxeption if the value to insert after not found', () => {
    // arrange
    let li = new LinkedList();
    let value = 12;
    let newValue = 30;
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    //act
    const func = () => {
      li.insertAfter(value, newValue);
    }
    
    //assert
    expect(func).toThrow('Node not found');
    expect(li.tail.data).toBe(5);
    expect(li.head.data).toBe(25);
    expect(li.length).toBe(5);
  });

  it('should return the node value kt the end of the linked list (k in the middle)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    li.insert(30);
    li.insert(35);
    li.insert(40);
    li.insert(45);
    li.insert(55);
    //act
    let retrunedValue = li.kthFromEnd(1);
    let retrunedValue1 = li.kthFromEnd(3);
    let retrunedValue2 = li.kthFromEnd(5);
    let retrunedValue3 = li.kthFromEnd(8);
    //assert
    expect(retrunedValue).toBe(10);
    expect(retrunedValue1).toBe(20);
    expect(retrunedValue2).toBe(30);
    expect(retrunedValue3).toBe(45);
  });

  it('should throw an exception where (k greate than the length of list)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    li.insert(30);
    li.insert(35);
    li.insert(40);
    li.insert(45);
    li.insert(55);
    //act
    const func = () => {
      let retrunedValue = li.kthFromEnd(20);
    }
    //assert
    expect(func).toThrow('Invalid input');

  });

  it('should throw an exception where (k not a posittive integer)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    li.insert(30);
    li.insert(35);
    li.insert(40);
    li.insert(45);
    li.insert(55);
    //act
    const func = () => {
      let retrunedValue = li.kthFromEnd(-2);
    }
    //assert
    expect(func).toThrow('Invalid input');

  });

  it('should return the node value kt the end of the linked list (k equal the length of the list)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    li.insert(10);
    li.insert(15);
    li.insert(20);
    li.insert(25);
    li.insert(30);
    li.insert(35);
    li.insert(40);
    li.insert(45);
    li.insert(55);
    //act
    let retrunedValue = li.kthFromEnd(9);
    //assert
    expect(retrunedValue).toBe(55);
  });

  it('should return the node value one far from the end of the linked list where (list size equal one)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    //act
    let retrunedValue = li.kthFromEnd(0);
    //assert
    expect(retrunedValue).toBe(5);
  });

  it('should throw an exception where (list size equal one and k greater than zero)', () => {
    // arrange
    let li = new LinkedList();
    li.insert(5);
    //act
    const func = () => {
      let retrunedValue = li.kthFromEnd(1);
      console.log(retrunedValue)
    }
    //assert
    expect(func).toThrow('Invalid input');

  });
  
});
