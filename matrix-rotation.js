function matrixRotation(M) {
  var N = M.length;

  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - i - 1; j++) {
      var temp = M[i][j];

      M[i][j] = M[j][N - 1 - i];

      M[j][N - 1 - i] = M[N - 1 - i][N - 1 - j];

      M[N - 1 - i][N - 1 - j] = M[N - 1 - j][i];

      M[N - 1 - j][i] = temp;
    }
  }
  return M;
}
var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

const ans = matrixRotation(matrix);
console.log(ans);
