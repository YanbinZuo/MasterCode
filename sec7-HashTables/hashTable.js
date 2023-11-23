class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // [[],[[1,a],[2,b]],[[3,c]],[],[]]
  //   0  1
  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [[key, value]];
    } else {
        for(let pair of this.data[address]) {
            if(key === pair[0]) {
                pair[1] = value;
                return this.data;
            }
        }
        this.data[address].push([key, value]);  
    }
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log("test: currentBucket with key: ", key, currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }
  
  // [[],[[1,a],[2,b]],[[3,c]],[],[]]
  //   0  1
  keys() {
    let keys = [];
    for(let i=0; i < this.data.length; i++) {
      let dataI = this.data[i];
      if(dataI) {
        for(let j=0; j < dataI.length; j++) {
          keys.push(dataI[j][0])
        }
      }
    }
    return keys;
  }
}

// const myHashTable = new HashTable(50);
const myHashTable = new HashTable(2);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 9);
myHashTable.set("apples", 10);
myHashTable.set("oranges", 2);
myHashTable.set("banana", 12 );
myHashTable.set("strawberries", 20 );
myHashTable.set("blueberries", 30 );
myHashTable.set("blueberries", 31 );
myHashTable.set("watermelons", 2 );
console.log(myHashTable.get("grapes"));
console.log(myHashTable);
console.log(myHashTable.keys());
