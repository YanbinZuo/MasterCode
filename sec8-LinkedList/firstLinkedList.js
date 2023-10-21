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

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = {
            value: value,
            next: null
        }
        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

console.log(myLinkedList);

const util = require('util');
// use util.inspect to show the entire structure when do console.log()
console.log(util.inspect(myLinkedList, { showHidden: false, depth: null }));

myLinkedList.prepend(1);
console.log(util.inspect(myLinkedList, {showHidden: false, depth: null}))
