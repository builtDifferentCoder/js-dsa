function twoSum(arr, sum) {
  var hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return true;
    else hash[sum - arr[i]] = arr[i];
  }
  return false;
}

const arr = [1, 2, 3, 5, 7];
const ans = twoSum(arr, 9);
console.log(ans);
