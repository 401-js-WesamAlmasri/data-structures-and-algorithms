'use strict';

// Node class
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


// Stack class
class Stack {
    constructor(){
        this.top = null;
    }

    push(value) {
        // create a new node
        const newNode = new Node(value);
        // Attatch new node to the top of the stack
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.isEmpty()){
            throw new Error('Empty Stack!')
        }
        // Save top value in variable
        const topValue = this.top.value;
        // Remove the top node from the stack
        this.top = this.top.next;
        // Retrun the top value
        return topValue;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Empty Stack!')
        }
        return this.top.value;
    }

    isEmpty(){
        return this.top === null;
    }
}

// Queue class
class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
    }

    enqueue(value){
        // Create new node
        const newNode = new Node(value);
        // Check edge case
        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
            return;
        }
        // Attatch new node to the rear of the Queue
        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error('Empty Queue!')
        }
        // Save front value in variable
        const frontValue = this.front.value;
        // Remove the front node from the Queue
        this.front = this.front.next;
        // Check edge case (if Queue become empty --> make the rear null)
        if(this.front === null){
            this.rear = null;
        }
        // Retrun the top value
        return frontValue;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error('Empty Queue!')
        }
        return this.front.value;
    }

    isEmpty(){
        return this.front === null;
    }
}

module.exports = {
    Node,
    Stack,
    Queue
}