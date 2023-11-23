const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  peek() {
    return this.top?.value;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.length === 0) return null;
    const val = this.top.value;
    this.top = this.top.next;
    this.length--;
    return val;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack.peek());
console.log(util.inspect(myStack, { showHidden: false, depth: null }));

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(util.inspect(myStack, { showHidden: false, depth: null }));

//Discord
//Udemy
//google



const Status = () => {
  const [serial, setSerial] = useState();
  const [touched, setTouched] = useState(false);

  const handleOnClick = () => {
    console.log("clicked")
  }

  return(
    <WUButton 
      onclick = {e => handleOnClick()}
      triggerEvents = {e => console.log("trigger event")}
    />
  )
}

wrapper.find("TextField#status-serial").props.onBlur();
