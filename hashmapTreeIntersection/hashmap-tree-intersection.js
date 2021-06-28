'use strict';

const { Hashtable } = require('../Data-Structures/hashTable/hashtable');

function treeIntersection(tree1, tree2) {
  const table = new Hashtable(1021);
  const result = [];
  // function for traverse tree
  const traverse = (node, check = false) => {
    //traverse left child
    if (node.left) traverse(node.left, check);
    // if we check for existence of data in the table
    if (check) {
      // Found the value in the table
      const exits = table.contains(node.value);
      if (exits) result.push(node.value);
    } else {
      // Not checking, then add the value to the table
      table.add(node.value);
    }
    //traverse right child
    if (node.right) traverse(node.right, check);
  };

  //traverse first tree to add its items to the table
  traverse(tree1.root, false);
  traverse(tree2.root, true);
  return result;
}

module.exports = {
  treeIntersection,
};
