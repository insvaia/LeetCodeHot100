/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (const mt of matrix) {
    mt.reverse();
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log(matrix);
