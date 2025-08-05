function palindrome(str) {
  return palindromHelper(str, 0, str.length - 1);
}

function palindromHelper(str, begin, end) {
  if (begin >= end) return true;
  if (str.charAt(begin) !== str.charAt(end)) {
    return false;
  } else {
    return palindromHelper(str, begin + 1, end - 1);
  }
}
console.log(palindrome("aibohphobia"));
