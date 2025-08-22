class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(n) {
    return Math.floor((n - 1) / 2);
  }
  leftChildIndex(n) {
    return n * 2 + 1;
  }
  rightChildIndex(n) {
    return n * 2 + 2;
  }
  parent(n) {
    return this.items[this.parentIndex(n)];
  }
  leftChild(n) {
    return this.items[this.leftChildIndex(n)];
  }
  rightChild(n) {
    return this.items[this.rightChildIndex(n)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
    this.items = [];
  }
  bubbleDown() {
    let index = 0;
    while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
      let smallerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
  add(val) {
    this.items.push(val);
    this.bubbleUp();
  }
  remove() {
    let val = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return val;
  }
}

class MaxHeap extends Heap {
  constructor() {
    super();
    this.items = [];
  }
  bubbleDown() {
    let index = 0;
    while (this.leftChild(index) && this.leftChild(index) > this.items[index]) {
      let biggerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) &&
        this.rightChild(index) > this.items[biggerIndex]
      ) {
        biggerIndex = this.rightChildIndex(index);
      }
      this.swap(biggerIndex, index);
      index = biggerIndex;
    }
  }
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }
  add(val) {
    this.items.push(val);
    this.bubbleUp();
  }
  remove() {
    let item = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}

var mh1 = new MaxHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1.remove());
console.log(mh1.remove());
console.log(mh1.remove());
console.log(mh1.remove());
console.log(mh1.remove());
