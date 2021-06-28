'use strict';

const { Node, BinaryTree } = require('../tree/tree');
const {
  treeIntersection,
} = require('../hashmapTreeIntersection/hashmap-tree-intersection');

describe('treeIntersection function', () => {
  it('should return empty array one of the trees are empty', () => {
    // Create nodes for tree1
    let node150 = new Node(150);
    let node100 = new Node(100);
    let node250 = new Node(250);
    let node75 = new Node(75);
    let node160 = new Node(160);
    let node200 = new Node(200);
    let node350 = new Node(350);
    let node175 = new Node(175);

    // Connect the nodes for tree1
    node150.left = node100;
    node100.left = node75;
    node100.right = node160;
    node150.right = node250;
    node250.left = node200;
    node250.right = node350;
    // create a binary tree1
    let tree1 = new BinaryTree(node150);
    //          150
    //       100      250
    //     75   160  200   350

    // create empty a binary tree2
    let tree2 = new BinaryTree(node175);
    //           175
    //        125    300
    //             500   700

    // Act
    const result = treeIntersection(tree1, tree2);
    // Assert
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  it('should return empty array if no intersection between trees', () => {
    // Create nodes for tree1
    let node150 = new Node(150);
    let node100 = new Node(100);
    let node250 = new Node(250);
    let node75 = new Node(75);
    let node160 = new Node(160);
    let node200 = new Node(200);
    let node350 = new Node(350);
    let node125 = new Node(125);
    let node175 = new Node(175);
    let node300 = new Node(300);
    let node500 = new Node(500);
    let node700 = new Node(700);
    // Connect the nodes for tree1
    node150.left = node100;
    node100.left = node75;
    node100.right = node160;
    node150.right = node250;
    node250.left = node200;
    node250.right = node350;
    // create a binary tree1
    let tree1 = new BinaryTree(node150);
    //          150
    //       100      250
    //     75   160  200   350

    // Connect the nodes for tree2
    node175.left = node125;
    node175.right = node300;
    node300.left = node500;
    node300.right = node700;
    // create a binary tree2
    let tree2 = new BinaryTree(node175);
    //           175
    //        125    300
    //             500   700

    // Act
    const result = treeIntersection(tree1, tree2);
    // Assert
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
  });

  it('should return array of intersections between trees', () => {
    // Create nodes for tree1
    let node150 = new Node(150);
    let node100 = new Node(100);
    let node250 = new Node(250);
    let node75 = new Node(75);
    let node160 = new Node(160);
    let node200 = new Node(200);
    let node350 = new Node(350);
    let node125 = new Node(125);
    let node175 = new Node(175);
    let node300 = new Node(300);
    let node500 = new Node(500);
    let node700 = new Node(700);
    // Connect the nodes for tree1
    node150.left = node100;
    node100.left = node75;
    node100.right = node160;
    node150.right = node250;
    node250.left = node200;
    node250.right = node350;
    // create a binary tree1
    let tree1 = new BinaryTree(node150);
    //          150
    //       100      250
    //     75   160  200   350

    // Connect the nodes for tree2
    node175.left = node125;
    node175.right = node300;
    node300.left = node500;
    node300.right = node700;
    node125.left = node100;
    // create a binary tree2
    let tree2 = new BinaryTree(node175);
    //           175
    //        125    300
    //      100     500   700
    //    75   160

    // Act
    const result = treeIntersection(tree1, tree2);
    // Assert
    expect(result.length).toBe(3);
    expect(result.includes(100)).toBe(true);
    expect(result.includes(75)).toBe(true);
    expect(result.includes(160)).toBe(true);
  });
});
