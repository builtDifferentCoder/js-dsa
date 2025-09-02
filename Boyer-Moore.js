function badMatchTable(word) {
  const table = {};
  const size = word.length;
  for (let i = 0; i < size - 1; i++) {
    table[word[i]] = size - 1 - i;
  }
  if (table[word[size - 1]] === undefined) {
    table[word[size - 1]] = size;
  }
  return table;
}

function BoyerMoore(str, pattern) {
  const badMatch = badMatchTable(pattern);

  let patternLastIndex = pattern.length - 1;
  let scanIndex = patternLastIndex;
  let maxOffset = str.length - pattern.length;
  let offset = 0;
  while (offset <= maxOffset) {
    scanIndex = 0;
    while (pattern[scanIndex] == str[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        return offset;
      }
      scanIndex++;
    }
    const badString = str[offset + patternLastIndex];
    if (badMatch[badString] != undefined) {
      offset += badMatch[badString];
    } else {
      offset += 1;
    }
  }
  return -1;
}

console.log(BoyerMoore("jellyjam", "jam"));
