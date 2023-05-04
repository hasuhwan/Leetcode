/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    nums=nums.map((el,idx)=>[el,idx]).sort((a,b)=>b[0]-a[0]);
    return nums[0][1];
};