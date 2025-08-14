class LRUNode {
  constructor(key, val) {
    this.key = key;
    this.data = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.head = new LRUNode(null, null);
    this.tail = new LRUNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.size = 0;
    this.keys = {};
  }

  addNode(node) {
    // Always insert before tail
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
    this.size++;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    this.size--;
  }

  moveToTail(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  get(key) {
    const node = this.keys[key];
    if (!node) return null;
    this.moveToTail(node);
    return node.data;
  }

  set(key, val) {
    const node = this.keys[key];
    if (node) {
      node.data = val;
      this.moveToTail(node);
    } else {
      if (this.size >= this.capacity) {
        const lru = this.head.next;
        this.removeNode(lru);
        delete this.keys[lru.key];
      }
      const newNode = new LRUNode(key, val);
      this.keys[key] = newNode;
      this.addNode(newNode);
    }
  }
}

// Test
const LRU = new LRUCache(5);
LRU.set(1, 1);
LRU.set(2, 2);
LRU.set(3, 3);
LRU.set(4, 4);
LRU.set(5, 5);
console.log(LRU.get(1)); // 1 (moves 1 to most recent)
console.log(LRU.get(2)); // 2
LRU.set(6, 6); // Evicts least recently used (3)
LRU.set(7, 7); // Evicts least recently used (4)
console.log(LRU.get(7)); // 7
