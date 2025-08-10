class Stack {
  constructor(array) {
    this.array = [];
    if (array) this.array = array;
  }
  getBuffer() {
    return this.array.slice();
  }
  isEmpty() {
    return this.array.length === 0;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  insertion(element) {
    this.array.push(element);
  }
  deletion() {
    return this.array.pop();
  }
  access(stack, n) {
    const buffer = stack.getBuffer();
    if (n <= 0) throw "N must be greater than zero";
    const bufferedStack = new Stack(buffer);
    while (n !== 0) {
      bufferedStack.deletion();
      n--;
    }
    return bufferedStack.deletion();
  }
  search(stack, element) {
    const buffer = stack.getBuffer();
    const bufferedStack = new Stack(buffer);
    while (!bufferedStack.isEmpty()) {
      if (bufferedStack.deletion() === element) return true;
    }
    return false;
  }
}

var stack = new Stack();
// stack.insertion(10);
// stack.insertion(5);
// console.log(stack.peek());

module.exports = Stack;
