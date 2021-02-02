class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  switchPositionsReverse() {
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
  }

  switchPositions(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  shift(item) {
    this.push("");
    this.switchPositionsReverse();
    this.data[0] = item;
    return item;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteByPosition(index) {
    const deletedElement = this.data[index];
    this.switchPositions(index);
    this.length--;
    delete this.data[this.length - 1];

    return deletedElement;
  }

  deleteFirstItem() {
    const firstItem = this.data[0];
    this.switchPositions(0);
    this.length--;
    delete this.data[this.length - 1];

    return firstItem;
  }
}

const myArray = new MyArray();

myArray.push("Jose");
myArray.push("Juan");
myArray.push("Pedro");
myArray.push("Maria");
myArray.push("Andrea");
