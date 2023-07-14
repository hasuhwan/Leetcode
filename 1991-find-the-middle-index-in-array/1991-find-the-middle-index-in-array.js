/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    const sum=nums.reduce((acc,cur)=>acc+cur,0);
    let left=0;
    for(let i=0; i<nums.length; i++){
        const temp=(sum-nums[i])/2;
        if(left===temp){
            return i;
        }
        left+=nums[i];
    }
    return -1;
};