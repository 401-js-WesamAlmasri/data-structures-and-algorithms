'use strict';

const { LinkedList } = require('../Data-Structures/linkedList/linked-list');

function zipLists(list1, list2) {

    // Create the new linked list
    let newList = new LinkedList();

    // Define the pointers for each list
    let currFirstList = list1.head;
    let currSecondList = list2.head;

    // Determine the head of the new list
    if(list1.head !== null){
        newList.append(list1.head.data);
        currFirstList = currFirstList.next;
    } else if (list2.head !== null){
        newList.append(list2.head.data);
        currSecondList = currSecondList.next;
    } else {
        return null;
    }

    // Adding nodes to the new list if don't reach the end of any list
    while(currFirstList !== null && currSecondList !== null){
        // Adding node to the new list from the second list
        newList.append(currSecondList.data);
        // Set the pointer of the list2 to the next node
        currSecondList = currSecondList.next;
        
        // Adding node to the new list from the first list
        newList.append(currFirstList.data);
        // Set the pointer of the list2 to the next node
        currFirstList = currFirstList.next;
    }

    // Already reached the second list end, adding the rest of the first list nodes to the new list
    
    if(currFirstList !== null ){
        while(currFirstList !== null){
            newList.append(currFirstList.data);
            currFirstList = currFirstList.next;
        }
    } else if(currSecondList !== null ) {
        // Already reached the second list end, adding the rest of the second list nodes to the new list
        while(currSecondList !== null){
            newList.append(currSecondList.data);
            currSecondList = currSecondList.next;
        }
    }
    
    return newList.head;
}

module.exports = zipLists;