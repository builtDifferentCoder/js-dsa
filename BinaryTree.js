class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(node) {
    if (!this.root) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (true) {
      if (node.val < curr.val) {
        if (!curr.left) {
          curr.left = node;
          break;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          break;
        }
        curr = curr.right;
      }
    }
  }
  preOrderRecursive(curr = this.root) {
    if (!curr) return;
    console.log(curr.val);
    this.preOrderRecursive(curr.left);
    this.preOrderRecursive(curr.right);
  }
  preOrderIterative() {
    let stack = [];
    stack.push(this.root);
    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.val);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  inOrderRecursive(curr = this.root) {
    if (!curr) return;
    this.inOrderRecursive(curr.left);
    console.log(curr.val);
    this.inOrderRecursive(curr.right);
  }
  inOrderIterative() {
    let stack = [];
    let curr = this.root;
    while (curr || stack.length > 0) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
  postOrderRecursive(curr = this.root) {
    if (!curr) return;
    this.postOrderRecursive(curr.left);
    this.postOrderRecursive(curr.right);
    console.log(curr.val);
  }
  postOrderIterative() {
    let s1 = [];
    let s2 = [];
    s1.push(this.root);
    while (s1.length) {
      let curr = s1.pop();
      s2.push(curr);

      if (curr.left) {
        s1.push(curr.left);
      }
      if (curr.right) {
        s1.push(curr.right);
      }
    }
    while (s2.length) {
      let node = s2.pop();
      console.log(node.val);
    }
  }
}

let tree = new BinaryTree();
tree.insert(new Node(10));
tree.insert(new Node(5));
tree.insert(new Node(15));
tree.insert(new Node(7));
tree.insert(new Node(2));
// tree.preOrderRecursive();
// tree.inOrderRecursive();
tree.postOrderRecursive();
console.log("Iterative:");
tree.postOrderIterative();
// tree.inOrderIterative();
// tree.preOrderIterative();
