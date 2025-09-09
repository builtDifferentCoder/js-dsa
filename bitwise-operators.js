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

// console.log(bitwiseAdd(5, 4));
// console.log(bitwiseNegate(5));
// console.log(bitwiseSubtract(5, 4));
console.log(bitWiseMultiplication(-4, 5));
