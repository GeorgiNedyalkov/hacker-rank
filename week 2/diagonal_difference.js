function diagonalDifference(matrix) {
  let absoluteDifference = 0;
  let rightDiagonal = 0;
  let leftDiagonal = 0;

  // calculate the right diagonal
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i == j) {
        rightDiagonal += matrix[i][j];
      }
    }
  }

  let rowCount = matrix.length;
  let count = 0;

  for (let i = matrix.length - 1; i >= 0; i--) {
    leftDiagonal += matrix[i][count];
    count++;
  }

  absoluteDifference = Math.abs(rightDiagonal - leftDiagonal);

  return absoluteDifference;
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
