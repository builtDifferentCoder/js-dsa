function printKLevels(root, k) {
  let arr = [];
  let q = [];
  if (!root) return;
  q.push([root, 1]);
  while (q.length) {
    let temp = q.shift();
    let node = temp[0];
    let height = temp[1];

    if (height === k) {
      arr.push(node.value);
    }
    if (node.left) q.push([node.left, height + 1]);
    if (node.right) q.push([node.right, height + 1]);
  }
  console.log(arr);
}

var node1 = {
  value: 1,
  left: {
    value: 0,
  },
  right: {
    value: 2,
  },
};

var node2 = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: -1,
    },
    right: {
      value: 0.5,
    },
  },
  right: {
    value: 2,
  },
};

printKLevels(node1, 1); // 1
printKLevels(node1, 2); // [0,2]
