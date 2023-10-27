class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length-1]
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    this.array.pop();
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.peek());

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());

//Discord
//Udemy
//google
