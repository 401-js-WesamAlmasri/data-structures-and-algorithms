'use strict';

function zipLists(list1, list2) {
  // Check some edge cases
  // if two lists are empty
  if(!list2.head && !list1.head){
    return null;
  }
  // if first list was empty
  if (!list1.head){
    list1.head = list2.head;
    return list1.head;
  }

  // Define the pointers for each list
  let temp1;
  let temp2;
  let currFirstList = list1.head;
  let currSecondList = list2.head;

  // Adding nodes to the new list if don't reach the end of any list
  while (currFirstList.next !== null || currSecondList !== null) {
    // Rearrange the order of two list
    if (currFirstList.next === null) { // currSecondList not null
      // assing the last node's next to the last node we reach in list two 
        currFirstList.next = currSecondList;
        //end the first list, end the loop
        break;
    } else if(currSecondList === null){ // currFirstList.next not null
        // end the second list end the loop
        break;
    } else {
        // both lists not ended yet
      temp1 = currFirstList.next;
      temp2 = currSecondList.next;
      currFirstList.next = currSecondList;
      currSecondList.next = temp1;
      // change the pointers to the next nodes
      currFirstList = temp1;
      currSecondList = temp2;
    }

  }
  return list1.head;
}

module.exports = zipLists;
