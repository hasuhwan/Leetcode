/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const depth = digits.length;
  const answer = [];
  const obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  function dfs(tempArr, count) {
    if (tempArr.length === depth) {
      answer.push(tempArr.join(""));
      return;
    }

    for (let i = 0; i < obj[digits[count + 1]].length; i++) {
      tempArr.push(obj[digits[count + 1]][i]);
      dfs(tempArr, count + 1);
      tempArr.pop();
    }
  }
  for (let i = 0; i < obj[digits[0]].length; i++) {
    const tempArr = [obj[digits[0]][i]];
    dfs(tempArr, 0);
  }
  return answer;
};