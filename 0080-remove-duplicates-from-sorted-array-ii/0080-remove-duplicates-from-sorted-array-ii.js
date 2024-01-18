/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 2;
  while(nums[i] !== undefined) {
    if (nums[i] === nums[i-2]) {
      let cur = i;
      while(nums[i] === nums[++i]) {
      }
      nums.splice(cur,i-cur);
      i = cur;
    } else {
      i++;
    }
  }
  return;
};