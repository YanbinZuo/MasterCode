// Arrow functions do not have their own this context. Instead, they inherit the this value from their surrounding lexical (enclosing) context. 
// In this case, when you call object1.functionA(), the arrow function is defined inside an object literal, but it doesn't capture the this of object1.
// Instead, it captures the this of the outer scope, which is usually the global context (Window in a browser environment). That's why you see 
// Window {...} when you log it.
const object1 = {
  functionA: () => {
    console.log(this);
  },
};

console.log(object1.functionA());

// Regular functions have their own this context, and it is determined by how the function is called. When you call object4.a(), the function is 
// called as a method of object4. As a result, this inside the function refers to object4, which is why you see {a: f} when you log it.
const object4 = {
  a: function () {
    console.log(this);
  },
};

console.log(object4.a());

class Player {
    constructor(name, type) {
        console.log('player', this)
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this)
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')
