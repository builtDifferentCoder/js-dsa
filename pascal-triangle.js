function pascalTriangle(row, col) {
  if (col < 0 || col > row) {
    return 0;
  } else if (col === 0 || col === row) {
    return 1;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}

console.log(pascalTriangle(5, 2));
