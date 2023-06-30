/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let temp=nums.slice(0,k).reduce((acc,cur)=>acc+cur,0);
    let max=temp;
    nums.forEach((el,idx)=>{
        if(idx<k){
            return;
        }
        temp=temp-nums[idx-k]+nums[idx];
        max=Math.max(max,temp);
    });
    return max/k;
};