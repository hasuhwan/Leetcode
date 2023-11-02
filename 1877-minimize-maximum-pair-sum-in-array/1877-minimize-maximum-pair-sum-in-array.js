/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let answer=0;
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length/2; i++){
        answer=Math.max(answer,nums[i]+nums[nums.length-1-i]);
    }
    return answer;
};