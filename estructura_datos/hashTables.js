class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  addItem(key, value) {
    const address = this.hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  getItem(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  deleteItem(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedBucket = currentBucket[i];
          delete currentBucket[i];
          return deletedBucket;
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);

myHashTable.addItem("Jose", 30);
myHashTable.addItem("Juan", 15);
myHashTable.addItem("Pedro", 20);
