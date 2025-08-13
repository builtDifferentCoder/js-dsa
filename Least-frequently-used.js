class LFUNode {
  constructor(key, val) {
    this.key = key;
    this.data = val;
    this.frequency = 1;
    this.next = null;
    this.prev = null;
  }
}

class LFUDoublyLinkedList {
  constructor() {
    this.head = new LFUNode("head", null);
    this.tail = new LFUNode("tail", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  insertAtHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }
  removeAtTail() {
    if (this.size === 0) return null;
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minfreq = 0;
    this.keys = {}; // key -> node
    this.freq = {}; // freq -> DLL
  }

  get(key) {
    const node = this.keys[key];
    if (!node) return null;

    this._updateFreq(node);
    return node.data;
  }

  set(key, val) {
    if (this.capacity === 0) return;

    let node = this.keys[key];
    if (node) {
      node.data = val;
      this._updateFreq(node);
    } else {
      if (this.size === this.capacity) {
        const list = this.freq[this.minfreq];
        const oldNode = list.removeAtTail();
        delete this.keys[oldNode.key];
        this.size--;
      }
      const newNode = new LFUNode(key, val);
      this.keys[key] = newNode;
      if (!this.freq[1]) this.freq[1] = new LFUDoublyLinkedList();
      this.freq[1].insertAtHead(newNode);
      this.minfreq = 1;
      this.size++;
    }
  }

  _updateFreq(node) {
    const oldFreq = node.frequency;
    this.freq[oldFreq].removeNode(node);

    if (oldFreq === this.minfreq && this.freq[oldFreq].size === 0) {
      this.minfreq++;
    }

    node.frequency++;
    if (!this.freq[node.frequency]) {
      this.freq[node.frequency] = new LFUDoublyLinkedList();
    }
    this.freq[node.frequency].insertAtHead(node);
  }
}

// Test
var lfu = new LFUCache(5);
lfu.set(1, 1);
lfu.set(2, 2);
lfu.set(3, 3);
lfu.set(4, 4);
lfu.set(5, 5);
console.log(lfu.get(1)); // 1
console.log(lfu.get(1)); // 1
console.log(lfu.get(1)); // 1
lfu.set(6, 6);
console.log(lfu.get(6)); // 6
