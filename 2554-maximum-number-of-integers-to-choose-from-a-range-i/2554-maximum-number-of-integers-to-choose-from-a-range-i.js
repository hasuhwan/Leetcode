/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  let answer = 0;
  let tempNum = 1;
  const set = new Set([...banned]);
  banned = [...set].sort((a, b) => a - b);
  let sum = 0;
  while (sum + tempNum <= maxSum && tempNum <= n) {
    if (banned[0] === tempNum) {
      banned.shift();
    } else {
      sum += tempNum;
      answer++;
    }
    tempNum++;
  }
  return answer;
};