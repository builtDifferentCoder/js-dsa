function iterative(n) {
  if (n <= 1) return n;
  let sum = 0;
  let last = 1;
  let lastSum = 0;
  for (let i = 1; i < n; i++) {
    sum = last + lastSum;
    lastSum = last;
    last = sum;
  }
  return sum;
}

function recursive(n) {
  if (n <= 1) return n;
  else {
    return recursive(n - 1) + recursive(n - 2);
  }
}

function tailRecursive(n, last, lastLast) {
  if (n == 0) return lastLast;
  if (n == 1) return last;

  return tailRecursive(n - 1, lastLast + last, last);
}
console.log(recursive(5));
console.log(iterative(5));
console.log(tailRecursive(5, 1, 0));
