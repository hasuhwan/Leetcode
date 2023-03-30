/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const answerSet = new Set();
  const answer = [];
  function dfs(idxArr, tempArr) {
    if (tempArr.length === nums.length) {
      const verify = tempArr.join("");
      if (!answerSet.has(verify)) {
        answerSet.add(verify);
        answer.push(tempArr);
      }

      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!idxArr.includes(i)) {
        idxArr.push(i);
        dfs(idxArr, [...tempArr, nums[i]]);
        idxArr.pop();
      }
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const visitedIdx = [i];
    dfs(visitedIdx, [nums[i]]);
  }
  return answer;
};