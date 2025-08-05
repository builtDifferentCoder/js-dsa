function swap(str, index1, index2) {
  let temp = str[index1];
  str[index1] = str[index2];
  str[index2] = temp;
}

function permute(str, begin, end) {
  if (begin == end) {
    console.log(str);
  } else {
    for (let i = begin; i < end + 1; i++) {
      swap(str, begin, i);
      permute(str, begin + 1, end);
      swap(str, begin, i);
    }
  }
}

function permuteArray(arrayStr) {
  permute(arrayStr, 0, arrayStr.length - 1);
}

permuteArray(["A", "C", "D"]);
