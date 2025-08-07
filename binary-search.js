function binarySearch(arr, n) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == n) return mid;
    else if (arr[mid] < n) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
const ans = binarySearch([1, 2, 3, 4, 5], 1);
console.log(ans);
