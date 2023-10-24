// 10 -> 5 -> 16
// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // this.tail.next = {
    //     value: value,
    //     next: null
    // }
    // this.tail = this.tail.next;
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return this;
    return this.printList();
  }

  prepend(value) {
    // const newNode = {
    //     value: value,
    //     next: this.head
    // }
    const newNode = new Node(value);
    newNode.next = this.head;
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
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (this.head === null || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }

    const prevNode = this.traverseToIndex(index - 1);
    if (index >= this.length - 1) this.tail = prevNode;
    prevNode.next = prevNode.next.next;
    this.length--;

    return this.printList();
  }

  reverse() {
    // if(!this.head || !this.head.next) return;
    if (this.length <= 1) return this.printList();

    let currNode = this.head;
    this.head = this.tail; 
    this.tail = currNode;

    let prevNode = null;
    while (currNode) {
      const temp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = temp;
    }
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 2);
myLinkedList.insert(0, 0);
myLinkedList.insert(20, 20);
myLinkedList.remove(2);
myLinkedList.remove(0);
myLinkedList.remove(4);
myLinkedList.remove(4);
myLinkedList.remove(4);
myLinkedList.reverse();

// console.log(myLinkedList);
const util = require("util");
// use util.inspect to show the entire structure when do console.log()
console.log(util.inspect(myLinkedList, { showHidden: false, depth: null }));
