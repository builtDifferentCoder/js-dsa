function isMirrorTree(tree1, tree2) {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  return (tree1.value =
    tree2.value &&
    isMirrorTree(tree1.left, tree2.left) &&
    isMirrorTree(tree1.right, tree2.right));
}

var node1 = {
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
  },
};

var node2 = {};

var node3 = {
  value: 3,
  left: {
    value: 2,
  },
  right: {
    value: 1,
  },
  value: 3,
  left: {
    value: 1,
  },
  right: {
    value: 2,
    left: {
      value: 2.5,
    },
  },
};
console.log(isMirrorTree(node1, node2));

console.log(isMirrorTree(node2, node3));
