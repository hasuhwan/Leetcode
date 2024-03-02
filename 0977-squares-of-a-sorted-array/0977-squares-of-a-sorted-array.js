/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(el=>Math.pow(el,2)).sort((a,b)=>a-b);
};