/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b)=>a-b);
    const mid=nums[Math.floor(nums.length/2)];
    return nums.reduce((acc,cur)=>acc+Math.abs(mid-cur),0);
};