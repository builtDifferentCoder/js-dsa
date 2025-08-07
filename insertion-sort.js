function insertionSort(arr) {
  let j;
  for (let i = 0; i < arr.length; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && value < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

const arr = [3, 5, 23, 6, 8, 9, 0, 2, 1];
const ans = insertionSort(arr);
console.log(ans);
