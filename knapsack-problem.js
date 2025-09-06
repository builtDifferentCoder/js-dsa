function TopDownKnapSack(W, val, wt, n, dp) {
  if (n === 0 || W === 0) return 0;

  if (dp[n][W] !== -1) return dp[n][W];
  let pick = 0;
  if (wt[n - 1] <= W) {
    pick = val[n - 1] + TopDownKnapSack(W - wt[n - 1], val, wt, n - 1, dp);
  }
  let notPick = TopDownKnapSack(W, val, wt, n - 1, dp);
  dp[n][W] = Math.max(pick, notPick);
  return dp[n][W];
}

function BottomUpKnapSack(W, val, wt) {
  let n = val.length;
  let dp = new Array({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= W; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else {
        let pick = 0;
        if (wt[i - 1] <= j) {
          pick = val[i - 1] + dp[i - 1][j - wt[i - 1]];
        }
        let notPick = dp[i - 1][j];
        dp[i][j] = Math.max(pick, notPick);
      }
    }
  }
  return dp[n][W];
}
