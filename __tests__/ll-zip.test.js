'use strict';

const { LinkedList } = require('../Data-Structures/linkedList/linked-list');
const zipLists = require('../llZip/ll-zip');

describe('Linked List ZIP function', () => {
    it('should return the head of the list zipped two lists with same size', () => {
        // arrange
        // list1 head -> [1] -> [3] -> [2] -> X
        let list1 = new LinkedList();
        list1.insert(2);
        list1.insert(3);
        list1.insert(1);

        // list2 head -> [5] -> [9] -> [4] -> X
        let list2 = new LinkedList();
        list2.insert(4);
        list2.insert(9);
        list2.insert(5);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X)
        expect(head.data).toBe(1);
        expect(head.next.data).toBe(5);
        expect(head.next.next.data).toBe(3);
        expect(head.next.next.next.data).toBe(9);
        expect(head.next.next.next.next.data).toBe(2);
        expect(head.next.next.next.next.next.data).toBe(4);
        expect(head.next.next.next.next.next.next).toBeNull();
    })

    it('should return the head of the list zipped if the first lists size less than the second', () => {
        // arrange
        // list1 head -> [1] -> [3] -> X
        let list1 = new LinkedList();
        list1.insert(3);
        list1.insert(1);

        // list2 head -> [5] -> [9] -> [4] -> X
        let list2 = new LinkedList();
        list2.insert(4);
        list2.insert(9);
        list2.insert(5);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
        expect(head.data).toBe(1);
        expect(head.next.data).toBe(5);
        expect(head.next.next.data).toBe(3);
        expect(head.next.next.next.data).toBe(9);
        expect(head.next.next.next.next.data).toBe(4);
        expect(head.next.next.next.next.next).toBeNull();
    })

    it('should return the head of the list zipped if the first lists size larger than the second', () => {
        // arrange
        // list1 head -> [1] -> [3] -> [2] -> X
        let list1 = new LinkedList();
        list1.insert(2);
        list1.insert(3);
        list1.insert(1);

        // list2 head -> [5] -> [9] -> X
        let list2 = new LinkedList();
        list2.insert(9);
        list2.insert(5);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [1] -> [5] -> [3] -> [9] -> [2] -> X
        expect(head.data).toBe(1);
        expect(head.next.data).toBe(5);
        expect(head.next.next.data).toBe(3);
        expect(head.next.next.next.data).toBe(9);
        expect(head.next.next.next.next.data).toBe(2);
        expect(head.next.next.next.next.next).toBeNull();
    })

    it('should return the head of the list zipped if the first lists size equal one', () => {
        // arrange
        // list1 head -> [1] -> X
        let list1 = new LinkedList();
        list1.insert(1);


        // list2 head -> [5] -> [9] -> X
        let list2 = new LinkedList();
        list2.insert(9);
        list2.insert(5);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [1] -> [5] -> [9] -> X
        expect(head.data).toBe(1);
        expect(head.next.data).toBe(5);
        expect(head.next.next.data).toBe(9);
        expect(head.next.next.next).toBeNull();
    })

    it('should return the head of the list zipped if the second lists size equal one', () => {
        // arrange

        // list2 head -> [5] -> [9] -> X
        let list1 = new LinkedList();
        list1.insert(9);
        list1.insert(5);

        // list2 head -> [1] -> X
        let list2 = new LinkedList();
        list2.insert(1);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [5] -> [1] -> [9] -> X
        expect(head.data).toBe(5);
        expect(head.next.data).toBe(1);
        expect(head.next.next.data).toBe(9);
        expect(head.next.next.next).toBeNull();
    })

    it('should return the head of the list zipped if the first list was empty', () => {
        // arrange
        let list1 = new LinkedList();

        // list2 head -> [5] -> [9] -> X
        let list2 = new LinkedList();
        list2.insert(9);
        list2.insert(5);

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [5] -> [9] -> X
        expect(head.data).toBe(5);
        expect(head.next.data).toBe(9);
    })

    it('should return the head of the list zipped if the second list was empty', () => {
        // arrange

        // list2 head -> [5] -> [9] -> X
        let list1 = new LinkedList();
        list1.insert(9);
        list1.insert(5);

        let list2 = new LinkedList();

        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [5] -> [9] -> X
        expect(head.data).toBe(5);
        expect(head.next.data).toBe(9);
    })

    it('should return null if the both list are empty', () => {
        // arrange
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        //act
        let head = zipLists(list1, list2)

        //assert (expected >> head -> [1] -> [5] -> [3] -> [9] -> [2] -> X
        expect(head).toBeNull();
    })

})