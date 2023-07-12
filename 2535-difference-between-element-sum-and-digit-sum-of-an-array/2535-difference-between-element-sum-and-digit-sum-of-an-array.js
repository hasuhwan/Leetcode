/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const sum=nums.reduce((acc,cur)=>acc+cur,0);
    const digit=nums.map(el=>{
        return String(el).split("").map(val=>Number(val));
    }).flat().reduce((acc,cur)=>acc+cur,0);
    return Math.abs(sum-digit);
};