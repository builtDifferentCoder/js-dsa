function wordCounter(str) {
  let wordArr = str
    .replace(/[.]/g, "") // remove periods
    .trim() // remove starting/ending spaces
    .split(/\s+/);
  let hash = {};
  let ans = {};

  for (let i = 0; i < wordArr.length; i++) {
    if (!hash[wordArr[i]]) hash[wordArr[i]] = 1;
    else hash[wordArr[i]]++;
  }
  let tempArr = [];
  for (var i in hash) {
    tempArr.push([hash[i], i]);
  }
  tempArr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < tempArr.length; i++) {
    let current = tempArr[i];
    ans[current[1]] = current[0];
  }
  return ans;
}

const str = "practice makes	perfect. get	perfect by	practice. just practice.";
const ans = wordCounter(str);
console.log(ans);
