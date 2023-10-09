/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    let left=0;
    let right=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===1){
            left=i;
        }else if(nums[i]===nums.length){
            right=i;
        }
    }
    return left<right?left+(nums.length-right-1):left+(nums.length-right-1)-1;
};