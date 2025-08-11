const Stack = require("./stack");
class SortableStack {
  constructor(size) {
    this.size = size;
    this.main = this.init();
    this.sorted = new Stack();
  }
  init() {
    const arr = new Stack();
    for (let i = 0; i < this.size; i++) {
      arr.insertion(Math.floor(Math.random() * 100));
    }
    return arr;
  }
  getDescending() {
    while (!this.main.isEmpty()) {
      var temp = this.main.deletion();
      while (!this.sorted.isEmpty() && this.sorted.peek() < temp) {
        this.main.insertion(this.sorted.deletion());
      }
      this.sorted.insertion(temp);
    }
  }
}

var s = new SortableStack(10);
s.getDescending();
console.log(s.sorted);
