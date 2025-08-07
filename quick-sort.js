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

function quickSort(arr, left, right) {
  let pivot;
  if (arr.length > 1) {
    pivot = partition(arr, left, right);
    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1);
    }
    if (pivot < right) {
      quickSort(arr, pivot, right);
    }
  }
  return arr;
}
const arr = [3, 5, 0, 2, 1];
const ans = quickSort(arr, 0, arr.length - 1);
console.log(ans);
