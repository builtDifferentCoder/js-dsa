function merge(leftArr, rightArr) {
  let res = [];
  let left = 0;
  let right = 0;
  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] < rightArr[right]) res.push(leftArr[left++]);
    else res.push(rightArr[right++]);
  }
  var leftRemains = leftArr.slice(left);
  var rightRemains = rightArr.slice(right);

  return res.concat(leftRemains).concat(rightRemains);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = (0 + arr.length) / 2;
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [3, 4, 2, 3, 67, 9, 1, 2, 0];
const ans = mergeSort(arr);
console.log(ans);
