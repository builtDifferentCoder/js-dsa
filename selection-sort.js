function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(arr, i, min);
    }
  }
  return arr;
}
const arr = [3, 5, 23, 6, 8, 9, 0, 2, 1];
const ans = selectionSort(arr);
console.log(ans);
