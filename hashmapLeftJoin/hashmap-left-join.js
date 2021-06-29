'use strict';

function leftJoin(table1, table2) {
  const result = [];
  // Iterate over all table 1 buckets
  for (let bucket of table1.table) {
    // Iterate over each bucket's element
    if (bucket) {
      let currentNode = bucket.head;
      while (currentNode) {
        const key = Object.keys(currentNode.data)[0];
        const value1 = Object.values(currentNode.data)[0];
        let value2 = null;

        if (table2.contains(key)) value2 = table2.get(key);

        result.push([key, value1, value2]);

        currentNode = currentNode.next;
      }
    }
  }

  return result;
}

module.exports = {
  leftJoin,
};
