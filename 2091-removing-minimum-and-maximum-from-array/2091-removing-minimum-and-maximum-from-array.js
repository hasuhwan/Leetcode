/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const len=nums.length;
    nums=nums.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
const one=Math.max(nums[0][1],nums[len-1][1])+1;
const two=Math.max(len-nums[0][1],len-nums[len-1][1]);
const three=Math.min(nums[0][1]+1+len-nums[len-1][1],nums[len-1][1]+1+len-nums[0][1]);

    return Math.min(one,two,three);
};