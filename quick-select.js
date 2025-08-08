function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (pivot > arr[left]) left++;
    while (pivot < arr[right]) right--;
    if (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

function quickSelect(arr, l, h, k) {
  let p = partition(arr, l, h);

  if (p == k - 1) return arr[p];
  else if (p > k - 1) {
    return quickSelect(arr, l, p - 1, k);
  } else {
    return quickSelect(arr, p + 1, h, k);
  }
}

function medianQuickSelect(arr) {
  return quickSelect(arr, 0, arr.length - 1, Math.floor(arr.length / 2));
}
var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
const ans = medianQuickSelect(array);
console.log(ans);
