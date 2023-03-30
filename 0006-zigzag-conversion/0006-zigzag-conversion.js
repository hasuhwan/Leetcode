/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const answer = [];
  let direction = 1;
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (answer[idx] === undefined) {
      answer[idx] = "";
    }
    answer[idx] += s[i];
    if (idx === 0) {
      direction = 1;
    } else if (idx === numRows - 1) {
      direction = -1;
    }
    idx += direction;
  }
  return answer.join("");
};