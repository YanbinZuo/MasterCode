const util = require("util")

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first?.value;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue(){
        if(this.length === 0) return null;
        const value = this.first.value;
        this.first = this.first.next;
        if(this.length === 1) {
            this.last = null;
        }
        this.length--;
        return value;
    }
    //isEmpty;
  }
  
const myQueue = new Queue();
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")
console.log(myQueue.peek())


console.log(util.inspect(myQueue, {showHidden: false, depth: null}))

myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(util.inspect(myQueue, {showHidden: false, depth: null}))


  //Joy
  //Matt
  //Pavel
  //Samir
  
  