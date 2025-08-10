const Stack = require("./stack");

class QueueUsingStack {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  insert(val) {
    this.inbox.insertion(val);
  }
  remove() {
    if (this.outbox.isEmpty()) {
      while (!this.inbox.isEmpty()) {
        this.outbox.insertion(this.inbox.deletion());
      }
    }
    return this.outbox.deletion();
  }
}
const stackQueue = new QueueUsingStack();
stackQueue.insert(4);
stackQueue.insert(10);
stackQueue.insert(5);
console.log(stackQueue.remove());
console.log(stackQueue.remove());
console.log(stackQueue.remove());
