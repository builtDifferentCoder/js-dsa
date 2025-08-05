function checkRows(rowIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (rowIndex[i] !== letter) {
      return false;
    }
  }
  return true;
}

function checkCols(gameMatrix, colIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (gameMatrix[i][colIndex] !== letter) {
      return false;
    }
  }
  return true;
}

function checkTicTacToeWinner(gameMatrix, letter) {
  const checkRow =
    checkRows(gameMatrix[0], letter) ||
    checkRows(gameMatrix[1], letter) ||
    checkRows(gameMatrix[2], letter);

  const checkCol =
    checkCols(gameMatrix, 0, letter) ||
    checkCols(gameMatrix, 1, letter) ||
    checkCols(gameMatrix, 2, letter);

  const leftToRight =
    gameMatrix[0][0] === letter &&
    gameMatrix[1][1] === letter &&
    gameMatrix[2][2] === letter;
  const rightToLeft =
    gameMatrix[0][2] === letter &&
    gameMatrix[1][1] === letter &&
    gameMatrix[2][0] === letter;

  return checkRow || checkCol || leftToRight || rightToLeft;
}
var board = [
  ["O", "-", "X"],
  ["-", "O", "-"],
  ["-", "X", "O"],
];

const test1 = checkTicTacToeWinner(board, "X");
const test2 = checkTicTacToeWinner(board, "O");

console.log(test1, " ", test2);
