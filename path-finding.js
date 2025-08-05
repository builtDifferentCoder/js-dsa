// var board = `%e%%%%%%%%%
//     %...%.%...%
//     %.%.%.%.%%%
//     %.%.......%
//     %.%%%%.%%.%
//     %.%.....%.%
//     %%%%%%%%%x%`;

// var rows = board.split("\n");

// function generateCols(row) {
//   return row.split("");
// }

const mazeMatrix = [
  ["%", "e", "%", "%", "%", "%", "%", "%", "%", "%", "%"],
  ["%", ".", ".", ".", "%", ".", "%", ".", ".", ".", "%"],
  ["%", ".", "%", ".", "%", ".", "%", ".", "%", "%", "%"],
  ["%", ".", "%", ".", ".", ".", ".", ".", ".", ".", "%"],
  ["%", ".", "%", "%", "%", "%", ".", "%", "%", ".", "%"],
  ["%", ".", "%", ".", ".", ".", ".", ".", "%", ".", "%"],
  ["%", "%", "%", "%", "%", "%", "%", "%", "%", "x", "%"],
];

function findChar(char, mazeMatrix) {
  let rows = mazeMatrix.length;
  let cols = mazeMatrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mazeMatrix[i][j] == char) {
        return [i, j];
      }
    }
  }
}

function printMaze(mazeMatrix) {
  var mazeMatrixStr = "";
  let rows = mazeMatrix.length;
  let cols = mazeMatrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      mazeMatrixStr += mazeMatrix[i][j];
    }
    mazeMatrixStr += "\n";
  }
  console.log(mazeMatrixStr);
}

function mazePathFinder(mazeMatrix) {
  let rows = mazeMatrix.length;
  let cols = mazeMatrix[0].length;

  let startPos = findChar("e", mazeMatrix);
  let endPos = findChar("x", mazeMatrix);

  const found = path(startPos[0], startPos[1]);
  return found;

  function path(x, y) {
    if (x > rows - 1 || y > cols - 1 || x < 0 || y < 0) return false;

    if (mazeMatrix[x][y] === "%" || mazeMatrix[x][y] === "+") return false;

    // Found destination
    if (x === endPos[0] && y === endPos[1]) return true;

    mazeMatrix[x][y] = "+";
    printMaze(mazeMatrix);

    if (
      path(x - 1, y) || // up
      path(x + 1, y) || // down
      path(x, y + 1) || // right
      path(x, y - 1) // left
    )
      return true;

    mazeMatrix[x][y] = "."; // backtrack
    return false;
  }
}

const ans = mazePathFinder(mazeMatrix);
console.log("Path found?", ans);
