function bitwiseAdd(a, b) {
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

function bitwiseNegate(a) {
  return bitwiseAdd(~a, 1);
}

function bitwiseSubtract(a, b) {
  return bitwiseAdd(a, bitwiseNegate(b));
}

function bitWiseMultiplication(a, b) {
  let result = 0;
  let sign = 1;

  if (a < 0) {
    a = bitwiseNegate(a);
    sign = -sign;
  }
  if (b < 0) {
    b = bitwiseNegate(b);
    sign = -sign;
  }

  while (b > 0) {
    if (b & 1) {
      result = bitwiseAdd(result, a);
    }
    a = a << 1; // shift multiplicand left
    b = b >> 1; // shift multiplier right
  }

  return sign < 0 ? bitwiseNegate(result) : result;
}

function bitWiseDividePositive(a, b) {
  let c = 0;
  if (b != 0) {
    while (a >= b) {
      a = bitwiseSubtract(a, b);
      c++;
    }
  }
  return c;
}

function bitwiseDivide(a, b) {
  let isNegative = false;
  let c = 0;
  if (a < 0) {
    a = bitwiseNegate(a);
    isNegative = !isNegative;
  }
  if (b < 0) {
    b = bitwiseNegate(b);
    isNegative != isNegative;
  }
  if (b != 0) {
    while (a >= b) {
      a = bitwiseSubtract(a, b);
      c++;
    }
  }
  if (isNegative) {
    c = bitwiseNegate(c);
  }
  return c;
}

// console.log(bitwiseAdd(5, 4));
// console.log(bitwiseNegate(5));
// console.log(bitwiseSubtract(5, 4));
// console.log(bitWiseMultiplication(-4, 5));

// console.log(bitWiseDividePositive(10, 2));
console.log(bitwiseDivide(-10, 2));
