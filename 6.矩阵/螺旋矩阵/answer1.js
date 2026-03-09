const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

var spiralOrder = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const size = row * col;
  const ans = Array(size);
  let i = 0,
    j = 0,
    di = 0;
  for (let k = 0; k < size; k++) {
    ans[k] = matrix[i][j];
    matrix[i][j] = Infinity;
    const x = i + DIRS[di][0];
    const y = j + DIRS[di][1];
    if (x < 0 || x >= row || y < 0 || y >= col || matrix[x][y] === Infinity) {
      di = (di + 1) % 4;
    }

    i += DIRS[di][0];
    j += DIRS[di][1];
  }

  return ans;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
