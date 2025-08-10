const Queue = require("./queue");

class StackUsingQueue {
  constructor() {
    this.inbox = new Queue();
  }
  insertion(val) {
    this.inbox.enqueue(val);
  }
  deletion() {
    if (this.inbox.isEmpty()) return undefined;
    const size = this.inbox.array.length - 1;
    const bufferedQueue = new Queue();
    let counter = 0;
    while (counter < size) {
      bufferedQueue.enqueue(this.inbox.dequeue());
      counter++;
    }
    const popped = this.inbox.dequeue();
    this.inbox = bufferedQueue;
    return popped;
  }
}
const stack = new StackUsingQueue();
stack.insertion(4);
stack.insertion(10);
stack.insertion(5);
console.log(stack.deletion());
console.log(stack.deletion());
console.log(stack.deletion());
