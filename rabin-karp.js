class RabinKarp {
  constructor() {
    this.prime = 101;
  }

  fingerPrintHash(str, len) {
    if (len == null) len = str.length;
    let hash = 0;
    for (let i = 0; i < len; i++) {
      hash += str.charCodeAt(i) * Math.pow(this.prime, i);
    }
    return hash;
  }

  recalculateHash(str, oldIndex, newIndex, oldHash, patternLength) {
    let newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = Math.floor(newHash / this.prime);
    newHash +=
      str.charCodeAt(newIndex) * Math.pow(this.prime, patternLength - 1);
    return newHash;
  }

  strEquals(str1, s1, e1, str2, s2, e2) {
    if (e1 - s1 !== e2 - s2) return false;
    while (s1 < e1 && s2 < e2) {
      if (str1[s1] !== str2[s2]) return false;
      s1++;
      s2++;
    }
    return true;
  }

  RabinKarpSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    if (m > n) return -1;

    let patternHash = this.fingerPrintHash(pattern, m);
    let textHash = this.fingerPrintHash(text, m);

    for (let i = 0; i <= n - m; i++) {
      if (
        patternHash === textHash &&
        this.strEquals(text, i, i + m, pattern, 0, m)
      ) {
        return i;
      }
      if (i < n - m) {
        textHash = this.recalculateHash(text, i, i + m, textHash, m);
      }
    }
    return -1;
  }
}

var rabinKarp = new RabinKarp();
console.log(rabinKarp.RabinKarpSearch("SammieBae", "as")); // -1 (not found)
console.log(rabinKarp.RabinKarpSearch("SammieBae", "Bae")); // 6
console.log(rabinKarp.RabinKarpSearch("SammieBae", "Sam")); // 0
