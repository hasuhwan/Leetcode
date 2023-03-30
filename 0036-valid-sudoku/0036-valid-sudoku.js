/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const visitedRow = [];
    const visitedCol = [];
    for (let j = 0; j < board[i].length; j++) {
      if (
        visitedRow.includes(board[i][j]) ||
        visitedCol.includes(board[j][i])
      ) {
        return false;
      }
      if (board[i][j] !== ".") {
        visitedRow.push(board[i][j]);
      }
      if (board[j][i] !== ".") {
        visitedCol.push(board[j][i]);
      }
    }
  }
  let row = 0;
  while (row < board.length / 3) {
    const tempArr = board.slice(row * 3, (row + 1) * 3);
    let col = 0;
    while (col < board[0].length / 3) {
      const visited = [];
      const arr = tempArr.map((el) => el.slice(col * 3, (col + 1) * 3)).flat();
      for (let i = 0; i < arr.length; i++) {
        if (visited.includes(arr[i])) {
          return false;
        }
        if (arr[i] !== ".") {
          visited.push(arr[i]);
        }
      }
      col++;
    }
    row++;
  }
  return true;
};