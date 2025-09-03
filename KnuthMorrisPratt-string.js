function longestPrefix(str) {
  let lsp = new Array(str.length).fill(0);
  let len = 0;
  let i = 1;
  let n = str.length;
  while (i < n) {
    if (str[i] === str[len]) {
      len++;
      lsp[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lsp[len - 1];
        i++;
      } else {
        lsp[i] = 0;
        i++;
      }
    }
  }
  return lsp;
}

function KMP(str, pattern) {
  let table = longestPrefix(pattern);
  let i = 0;
  let j = 0;
  while (i < str.length) {
    if (str[i] !== pattern[j]) {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        i++;
      }
    } else if (str[i] === pattern[j]) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      return true;
    }
  }
  return false;
}

console.log(KMP("sammiebae", "sammiebaee"));
