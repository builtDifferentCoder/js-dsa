function intersection(set1, set2) {
  var common = new Set();
  for (let n of set2) {
    if (set1.has(n)) {
      common.add(n);
    }
  }
  return common;
}
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
// let ans = intersection(set1, set2);
// console.log(ans);

function isSuperSet(set1, set2) {
  for (let n of set2) {
    if (!set1.has(n)) return false;
  }
  return true;
}

// const ans = isSuperSet(set1, set2);
// console.log(ans);

function union(set1, set2) {
  let all = new Set(set1);
  for (let n of set2) {
    all.add(n);
  }
  return all;
}
// const ans = union(set1, set2);
// console.log(ans);

function difference(set1, set2) {
  let d = new Set(set1);
  for (let n of set2) {
    if (d.has(n)) d.delete(n);
  }
  return d;
}
const ans = difference(set1, set2);
console.log(ans);
