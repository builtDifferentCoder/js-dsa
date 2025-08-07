function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) return true;
  }
  return false;
}

const arr = [3, 5, 23, , 6, 8, 9, 0, 2, 1];
const ans = linearSearch(arr, 5);
console.log(ans);
