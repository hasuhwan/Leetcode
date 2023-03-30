/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const answer = [];
  nums.sort((a, b) => a - b);
  for (i = 0; i <= nums.length - 4; i++) {
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (j = i + 1; j <= nums.length - 3; j++) {
      if (j - 1 > i && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const temp = nums[i] + nums[j] + nums[left] + nums[right];
        if (temp === target) {
          console.log(i, j, left, right);
          answer.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (temp < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return answer;
};