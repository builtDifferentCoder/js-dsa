function squareIntLinear(number) {
  if (number == 0 || number == 1) return number;

  let i = 1;
  let square = 1;
  while (square < number) {
    if (square == number) return square;
    i++;
    square = i * i;
  }
  return i;
}

function squareRootBinary(number) {
  if (number == 0 || number == 1) return number;
  let start = 1,
    end = number,
    ans;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === number) return mid;

    if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

// const num = squareIntLinear(9);
const ans = squareRootBinary(81);
console.log(ans);
