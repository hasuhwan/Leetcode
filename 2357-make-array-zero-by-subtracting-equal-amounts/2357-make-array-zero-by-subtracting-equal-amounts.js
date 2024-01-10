/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const set=new Set(nums);
    if(set.has(0)){
        return set.size-1;
    }
    return set.size
};