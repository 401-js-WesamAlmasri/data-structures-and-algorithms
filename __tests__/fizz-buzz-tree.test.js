'use strict';

const { Node, KTree, fizzBuzzTree } = require('../fizzBuzzTree/fizz-buzz-tree');

// Node test
describe('Node class', () => {
  it('should create empty node', () => {
    // arrange, act
    let node = new Node();

    // assert
    expect(node.value).toBeNull();
    expect(node.children).toEqual([]);
  });
  it('should create a node', () => {
    // arrange, act
    let node = new Node(5);

    // assert
    expect(node.value).toBe(5);
    expect(node.children).toEqual([]);
  });

  it('should point to the childern nodes', () => {
    // arrange
    let value = 5;
    let value1 = 10;
    let value2 = 15;
    let value3 = 120;
    let node = new Node(value);
    let node1 = new Node(value1);
    let node2 = new Node(value2);
    let node3 = new Node(value3);
    // act
    node.children.push(node1);
    node.children.push(node2);
    node.children.push(node3);
    // assert
    expect(node.value).toBe(value);
    expect(node.children).toEqual([node1, node2, node3]);
    expect(node.children[0]).toEqual(node1);
    expect(node.children[1]).toEqual(node2);
    expect(node.children[2]).toEqual(node3);
  });
});

// Binary tree class
describe('K-ry tree', () => {
  it('should successfully instantiate an empty tree', () => {
    // Act
    let tree = new KTree();
    // Assert
    expect(tree.root).toBeNull();
  });

  it('should successfully instantiate a tree with a single root node', () => {
    // arrange
    let value = 5;
    // Act
    let tree = new KTree(value);
    // Assert
    expect(tree.root).toBe(value);
  });
});

describe('FizzBuzzTree function', () => {
  it('should return null if the tree is empty', () => {
    // Arrange
    let tree = new KTree();
    // Act
    let result = fizzBuzzTree(tree);
    // Assert
    expect(result).toBeNull();
  });

  it('should return null if the tree is empty', () => {
    // Arrange
    let tree = new KTree();
    // Act
    let result = fizzBuzzTree(tree);
    // Assert
    expect(result).toBeNull();
  });

  it('should return the correct result if the tree has one node', () => {
    // Arrange
    let value = 5;
    let node = new Node(value);
    let tree = new KTree(node);
    // Act
    let newTree = fizzBuzzTree(tree);
    // Assert
    expect(newTree.root.value).toBe('Buzz');
    expect(newTree.root.children.length).toBe(0);
  });

  it('should return the correct result if the tree many nodes', () => {
    // Arrange
    let one = new Node(1);
    let three = new Node(3);
    let five = new Node(5);
    let six = new Node(6);
    let nine = new Node(9);
    let ten = new Node(10);
    let eleven = new Node(11);
    let thirteen = new Node(13);
    let fifteen = new Node(15);
    // Connect the nodes
    ten.children = [five, thirteen, three];
    five.children = [nine, one, six];
    thirteen.children = [eleven, fifteen];
    //                      10
    //             5        13        3 
    //         9  1  6    11   15      
    let tree = new KTree(ten);
    // Act
    let newTree = fizzBuzzTree(tree);
    
    // Assert
    expect(newTree.root.value).toEqual('Buzz');
    expect(newTree.root.children.length).toEqual(3);

    expect(newTree.root.children[0].value).toEqual('Buzz');
    expect(newTree.root.children[0].children.length).toEqual(3);

    expect(newTree.root.children[0].children[0].value).toEqual('Fizz');
    expect(newTree.root.children[0].children[0].children.length).toEqual(0);
    expect(newTree.root.children[0].children[1].value).toEqual('1');
    expect(newTree.root.children[0].children[1].children.length).toEqual(0);
    expect(newTree.root.children[0].children[2].value).toEqual('Fizz');
    expect(newTree.root.children[0].children[2].children.length).toEqual(0);

    expect(newTree.root.children[1].value).toEqual('13');
    expect(newTree.root.children[1].children.length).toEqual(2);

    expect(newTree.root.children[1].children[0].value).toEqual('11');
    expect(newTree.root.children[1].children[0].children.length).toEqual(0);
    expect(newTree.root.children[1].children[1].value).toEqual('FizzBuzz');
    expect(newTree.root.children[1].children[1].children.length).toEqual(0);

    expect(newTree.root.children[2].value).toEqual('Fizz');
    expect(newTree.root.children[2].children.length).toEqual(0);
  });
});
