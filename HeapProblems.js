const { MinHeap, MaxHeap } = require("./Heaps");

class MedianHeap {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }
  push(val) {
    if (val > this.median()) {
      this.minHeap.add(val);
    } else {
      this.maxHeap.add(val);
    }

    if (this.minHeap.size() - this.maxHeap.size() > 1) {
      this.maxHeap.add(this.minHeap.remove());
    }

    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.add(this.maxHeap.remove());
    }
  }

  median() {
    if (this.minHeap.size() === 0 && this.maxHeap.size() === 0) {
      return Number.NEGATIVE_INFINITY;
    } else if (this.minHeap.size() === this.maxHeap.size()) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.peek();
    } else {
      return this.maxHeap.peek();
    }
  }
}

function kthSmallestElement(arr, k) {
  let heap = new MinHeap();
  for (const n of arr) {
    heap.add(n);
  }

  for (let i = 1; i < k; i++) {
    heap.remove();
  }
  return heap.remove();
}

function kthLargestElement(arr, k) {
  let heap = new MaxHeap();
  for (const n of arr) {
    heap.add(n);
  }
  for (let i = 1; i < k; i++) {
    heap.remove();
  }
  return heap.remove();
}

var array1 = [12, 3, 13, 4, 2, 40, 23];
console.log(kthLargestElement(array1, 2));
console.log(kthLargestElement(array1, 1));
console.log(kthLargestElement(array1, 7));

// var medianH = new MedianHeap();

// medianH.push(12);
// console.log(medianH.median()); // 12
// medianH.push(2);
// console.log(medianH.median()); // 7 (

// medianH.push(23);
// console.log(medianH.median()); // 12
// medianH.push(13);
// console.log(medianH.median());
