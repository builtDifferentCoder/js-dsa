class Queue {
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
    return this.array[0];
  }
  enqueue(val) {
    return this.array.push(val);
  }
  dequeue() {
    return this.array.shift();
  }
  access(queue, n) {
    const buffer = queue.getBuffer();
    if (n <= 0) throw "N must be greater than zero";
    const bufferedQueue = new Queue(buffer);
    while (n !== 0) {
      bufferedQueue.dequeue();
      n--;
    }
    return bufferedQueue.dequeue();
  }
  search(queue, element) {
    const buffer = queue.getBuffer();
    const bufferedQueue = new Queue(buffer);
    while (!bufferedQueue.isEmpty()) {
      if (bufferedQueue.dequeue() === element) return true;
    }
    return false;
  }
}
module.exports = Queue;
