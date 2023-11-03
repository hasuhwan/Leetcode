/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max=nums[0];
    let temp=nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]>nums[i-1]){
            temp+=nums[i];
        }else{
            temp=nums[i];
        }
        max=Math.max(max,temp);
    }
    return max;
};