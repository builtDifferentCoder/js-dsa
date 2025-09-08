function lavensteinDistance(s1, s2, l1, l2) {
  if (l1 === 0) return l2;
  if (l2 === 0) return l1;
  if (s1[l1 - 1] == s2[l2 - 1])
    return lavensteinDistance(s1, s1, l1 - 1, l2 - 1);

  return (
    1 +
    Math.min(
      lavensteinDistance(s1, s2, l1, l2 - 1),
      lavensteinDistance(s1, s2, l1 - 1, l2),
      lavensteinDistance(s1, s2, l1 - 1, l2 - 1)
    )
  );
}

function lavensteinDistanceDp(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = Array(n + 1).fill(Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const insert = dp[i][j - 1];
        const remove = dp[i - 1][j];
        const replace = dp[i - 1][j - 1];
        dp[i][j] = 1 + Math.min(insert, remove, replace);
      }
    }
  }
  return dp[n][m];
}
console.log(lavensteinDistanceDp("sammie", "bae"));
// console.log(lavensteinDistance("sammie", "bae", 6, 3));
