class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let n = new Node(val);
    if (this.root === null) {
      this.root = n; // ✅ fix: assign the node, not the value
      return;
    }

    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (curr.left !== null) {
          curr = curr.left;
        } else {
          curr.left = n;
          break;
        }
      } else if (val > curr.val) {
        if (curr.right !== null) {
          curr = curr.right;
        } else {
          curr.right = n;
          break;
        }
      } else {
        // duplicate → ignore
        break;
      }
    }
  }

  remove(val) {
    this.root = dfs(this.root, val);

    function dfs(root, val) {
      if (!root) return null;

      if (val < root.val) {
        root.left = dfs(root.left, val);
      } else if (val > root.val) {
        root.right = dfs(root.right, val);
      } else {
        // node found
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        } else {
          let temp = findMin(root.right);
          root.val = temp.val;
          root.right = dfs(root.right, temp.val); // ✅ fix: reassign right
        }
      }
      return root;
    }

    function findMin(root) {
      while (root.left) {
        root = root.left;
      }
      return root;
    }
  }

  search(val) {
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  printVal(curr = this.root) {
    if (!curr) return;
    this.printVal(curr.left);
    console.log(curr.val);
    this.printVal(curr.right);
  }
}

// ✅ Testing
let bTree = new BinarySearchTree();
bTree.insert(12);
bTree.insert(5);
bTree.insert(7);
bTree.insert(3);
bTree.insert(1);

console.log("Inorder traversal:");
bTree.printVal();
// Expected sorted output: 1, 3, 5, 7, 12

console.log("Search 7:", bTree.search(7)); // true
console.log("Search 8:", bTree.search(8)); // false

console.log("Removing 5...");
bTree.remove(5);

console.log("Traversal after removal:");
bTree.printVal();
// Expected sorted output without 5: 1, 3, 7, 12
