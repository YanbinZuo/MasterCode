class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    const prevNode = this.traverseToIndex(index - 1);
    const nextNode = prevNode.next;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (this.head === null || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.printList();
    }

    const prevNode = this.traverseToIndex(index - 1);
    prevNode.next = prevNode.next.next;
    if(prevNode.next) {
      prevNode.next.prev = prevNode;
    }
    this.length--;

    return this.printList();
  }

  traverseToIndex(index) {
    // check params
    if (index >= this.length - 1) return this.tail;

    let counter = 0;
    let currNode = this.head;
    while (counter < index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  printList() {
    const arr = [];
    let currNode = this.head;
    while (currNode !== null) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(arr);
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(1, 2);
myDoublyLinkedList.insert(0, 0);
myDoublyLinkedList.insert(20, 20);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.remove(0);
myDoublyLinkedList.remove(4);
myDoublyLinkedList.remove(4);
myDoublyLinkedList.remove(4);

// console.log(myDoublyLinkedList);
// const util = require('util');
// // use util.inspect to show the entire structure when do console.log()
// console.log(util.inspect(myDoublyLinkedList, { showHidden: false, depth: null }));
