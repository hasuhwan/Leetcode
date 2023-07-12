/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const sum=nums.reduce((acc,cur)=>acc+cur,0);
    const digit=nums.join("").split("").map(el=>Number(el)).reduce((acc,cur)=>acc+cur,0);
    return Math.abs(sum-digit);
};