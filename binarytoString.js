function binaryToString(n) {
  var binaryString = "";

  function binaryToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      binaryToStringHelper(Math.floor(n / 2));
      binaryToStringHelper(n % 2);
    }
  }
  binaryToStringHelper(n);
  return binaryString;
}

const ans = binaryToString(32);
console.log(ans);
