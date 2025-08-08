function countSort(arr) {
  let hash = {};
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    else hash[arr[i]]++;
  }

  for (var key in hash) {
    for (let i = 0; i < hash[key]; i++) {
      ans.push(parseInt(key));
    }
  }
  return ans;
}

const arr = [6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3];

const ans = countSort(arr);
console.log(ans);
