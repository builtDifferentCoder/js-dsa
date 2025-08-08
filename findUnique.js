function findUnique(arr) {
  var hash = {};
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    else hash[arr[i]]++;
  }
  for (var key in hash) {
    if (hash[key] == 1) {
      ans = parseInt(key);
    }
  }
  return ans ? ans : -1;
}

const arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
const ans = findUnique(arr);
console.log(ans);
