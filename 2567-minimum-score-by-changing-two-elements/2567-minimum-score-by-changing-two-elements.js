/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const end=nums.length-1
    return Math.min(nums[end]-nums[2],nums[end-2]-nums[0],nums[end-1]-nums[1]);
};