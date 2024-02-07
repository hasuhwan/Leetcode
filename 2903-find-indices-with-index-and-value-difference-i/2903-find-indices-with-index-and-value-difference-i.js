/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    for(let i=0; i<nums.length-indexDifference; i++){
        for(let j=i+indexDifference; j<nums.length; j++){
            if(Math.abs(nums[i]-nums[j])>=valueDifference){
                return [i,j];
            }
        }
    }
    return [-1,-1];
};