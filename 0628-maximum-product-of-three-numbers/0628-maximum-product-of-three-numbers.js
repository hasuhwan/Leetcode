/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let answer=0;
    if(nums[0]<0&&nums[1]<0){
        answer=nums[0]*nums[1]*nums[nums.length-1];
    }
    const temp=nums.slice(-3).reduce((acc,cur)=>acc*cur,1);
    return Math.max(answer,temp);
};