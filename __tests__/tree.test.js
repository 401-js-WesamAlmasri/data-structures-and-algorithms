'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree/tree');

// Node test
describe('Node class', () => {
  it('should create a node', () => {
    // arrange, act
    let node = new Node(5);

    // assert
    expect(node.value).toBe(5);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  it('should point to the left and right node', () => {
    // arrange
    let value = 5;
    let valueL = 10;
    let valueR = 10;
    let node = new Node(value);
    let nodeL = new Node(valueL);
    let nodeR = new Node(valueR);
    // act
    node.left = nodeL;
    node.right = nodeR;
    // assert
    expect(node.value).toBe(value);
    expect(node.left).toEqual(nodeL);
    expect(node.right).toEqual(nodeR);

    expect(node.left.value).toBe(valueL);
    expect(node.right.value).toBe(valueR);
  });
});

// Binary tree class
describe('Binary Tree', () => {
  it('should successfully instantiate an empty tree', () => {
    // Act
    let tree = new BinaryTree();
    // Assert
    expect(tree.root).toBeNull();
  });
  it('should successfully instantiate a tree with a single root node', () => {
    // arrange
    let value = 5;
    // Act
    let tree = new BinaryTree(value);
    // Assert
    expect(tree.root).toBe(value);
  });

  describe('Traverse a tree', () => {
    // Create nodes
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);
    // Connect the nodes
    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;
    // create a binary tree
    let tree = new BinaryTree(one);
    // root - left - right
    it('should traverse tree using pre-order', () => {
      // arrange
      let expectedResult = [1, 2, 6, 7, 8, 9, 3, 4, 5];
      // act
      let preOrderResult = tree.preOrder();
      // assert
      expect(preOrderResult).toEqual(expectedResult);
    });

    // left - root -right
    it('should traverse tree using in-order', () => {
      // arrange
      let expectedResult = [6, 8, 7, 9, 2, 1, 4, 3, 5];
      // act
      let inOrderResult = tree.inOrder();
      // assert
      expect(inOrderResult).toEqual(expectedResult);
    });

    // left - right - root
    it('should traverse tree using post-order', () => {
      // arrange
      let expectedResult = [8, 9, 7, 6, 2, 4, 5, 3, 1];
      // act
      let postOrderResult = tree.postOrder();
      // assert
      expect(postOrderResult).toEqual(expectedResult);
    });
  });
});

// Binary Search Tree  class
describe('Binary Search Tree', () => {
  it('should successfully instantiate an empty tree', () => {
    // arrange
    // Act
    let tree = new BinarySearchTree();
    // Assert
    expect(tree.root).toBeNull();
  });
  it('should successfully  instantiate a tree with a single root node', () => {
    // arrange
    let value = 5;
    // Act
    let tree = new BinarySearchTree(value);
    // Assert
    expect(tree.root.value).toBe(value);
  });
  it('should successfully add a left child and right child to a single root node', () => {
    // arrange
    let value1 = 5;
    let value2 = 2;
    let value3 = 7;
    let tree = new BinarySearchTree(value1);
    // Act
    tree.add(value2);
    tree.add(value3);
    // Assert
    expect(tree.root.left.value).toBe(value2);
    expect(tree.root.right.value).toBe(value3);
  });

  it('should successfully add multiple nodes to the tree', () => {
    // arrange
    let tree = new BinarySearchTree();
    // Act
    tree.add(10);
    tree.add(5);
    tree.add(13);
    tree.add(2);
    tree.add(7);
    tree.add(11);
    tree.add(15);
    // Assert
    expect(tree.root.value).toBe(10);
    expect(tree.root.left.value).toBe(5);
    expect(tree.root.left.left.value).toBe(2);
    expect(tree.root.left.right.value).toBe(7);
    expect(tree.root.right.value).toBe(13);
    expect(tree.root.right.left.value).toBe(11);
    expect(tree.root.right.right.value).toBe(15);
  });

  it('should return true if find the node', () => {
    // arrange
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(13);
    tree.add(2);
    tree.add(7);
    tree.add(11);
    tree.add(15);
    // Act
    let result = tree.contains(7)
    // Assert
    expect(result).toBe(true);
  });

  it('should return false if not find the node', () => {
    // arrange
    let tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(13);
    tree.add(2);
    tree.add(7);
    tree.add(11);
    tree.add(15);
    // Act
    let result = tree.contains(99)
    // Assert
    expect(result).toBe(false);
  });
});
